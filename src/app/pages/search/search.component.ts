import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CpfCnpjValidator } from 'src/app/directives/cpf/cpf.validator';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.prepareForm();
  }

  getCpf() {
    
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
