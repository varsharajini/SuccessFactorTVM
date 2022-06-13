import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform:any =FormGroup;
  constructor(private rout:Router) { }

  ngOnInit() {
    this.loginform = new FormGroup({
      username : new FormControl(null,[ Validators.minLength(5),Validators.required]),
      password : new FormControl(null,[ Validators.minLength(5),Validators.required]),
    })
  }
  submit(){
if(this.loginform.valid)
console.log(this.loginform.value);
this.rout.navigate(['/success']);
  }
}
