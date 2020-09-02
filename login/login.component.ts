import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { JoinService } from '../join.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private loginservice:JoinService) { }

  loginuser(email,password){
    if(email&&password)
    this.loginservice.loginuser(email,password);
    else if(email) alert ("Please Enter Password")
    else if(password) alert("Please Enter Email")
    else alert("please enter email and password")
  }

  ngOnInit() {
  }

}
