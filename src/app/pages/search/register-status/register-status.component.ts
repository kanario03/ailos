import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register-status',
  templateUrl: './register-status.component.html',
  styleUrls: ['./register-status.component.css']
})
export class RegisterStatusComponent implements OnInit {

  @Input() userInfo;

  constructor() { }

  ngOnInit(): void {

  }

}
