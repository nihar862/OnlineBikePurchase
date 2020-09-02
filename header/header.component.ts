import { Component, OnInit } from '@angular/core';
import { JoinService } from '../join.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class HeaderComponent implements OnInit {

  public islogin:any
  public flag: any

  constructor(private service:JoinService) { 
    if(localStorage.getItem('name'))
    {
      this.flag=localStorage.getItem('name');
      this.islogin=true;
    }
    else
    this.islogin=this.service.islogin;
  }

  ngOnInit() {
    if(this.service.flag)
    {
      this.flag=this.service.flag;
      this.islogin=this.service.islogin;
    }
  }

}
