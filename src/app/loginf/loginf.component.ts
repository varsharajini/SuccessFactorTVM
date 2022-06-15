import { Component, OnInit } from '@angular/core';

import{FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-loginf',
  templateUrl: './loginf.component.html',
  styleUrls: ['./loginf.component.scss']
})
export class LoginfComponent implements OnInit {
  loginForm: any=[];
  router:any;
  constructor() { }

  
    ngOnInit(){
      this.loginForm= new FormGroup({
        name:new FormControl('',Validators.required),
         password:new FormControl('',Validators.required),
         confirmpassword:new FormControl('',Validators.required)
      })
    }
    // onClick(){
    //   return this.router.navigate(['/design']);
    // }
  }


