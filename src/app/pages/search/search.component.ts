import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CpfCnpjValidator } from 'src/app/directives/cpf/cpf.validator';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public registerForm: FormGroup;
  public showResearch = false;

  public user: any;
  public application: any;
  public current: any;


  constructor(
    private formBuilder: FormBuilder,
    private fsService: FirestoreService
  ) { }

  async ngOnInit() {
    this.prepareForm();
    this.user = await this.fsService.getUser();
    this.application = await this.fsService.getApplicationAccount();
    this.current = await this.fsService.getCurrentAccount();
  }

  getCpf() {
    this.showResearch = true;
  }

  prepareForm() {
    this.registerForm = this.formBuilder.group({
      cpf: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^(\d{3}\.){2}\d{3}\-\d{2}$/),
          Validators.minLength(14),
          Validators.maxLength(14),
          CpfCnpjValidator.validate
        ])
      )
    });
    this.registerForm.controls.cpf.valueChanges.subscribe(data => {
        let cpf = data.replace(/\D/g,"")
        cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
        cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
        cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
        this.registerForm.controls.cpf.setValue(cpf, {emitEvent: false});
    });
  }



}
