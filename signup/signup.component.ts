import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {JoinService} from '../join.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router, private joinService:JoinService) { }

  ngOnInit() {
  }

  registerUser(user)
  {
    if(user.name =="" || user.email == "" || user.password == "" || user.contact == "" || user.address == "" ||user.city == "" )
    alert("please fill up all details")
    else
    this.joinService.registerUser(user);
  }


}
