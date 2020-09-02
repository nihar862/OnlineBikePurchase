import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { JoinService } from '../join.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class LogoutComponent implements OnInit {
 public islogin:any
  constructor(private router:Router, private service:JoinService) { }

  ngOnInit() {
    this.service.islogin=false;
    localStorage.setItem('token',localStorage.getItem('name'));
    localStorage.removeItem('name')
  }

}
