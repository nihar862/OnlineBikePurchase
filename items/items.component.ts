import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { JoinService } from '../join.service';
import { Item } from '../item';
import { JsonPipe } from '@angular/common';
import { isDefined } from '@angular/compiler/src/util';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class ItemsComponent implements OnInit {

  public name:string
  public price:string
  public details:string
  public item:Item
  constructor(private router:Router,private service:JoinService)
  {
    this.name=this.service.pname;
    this.price=this.service.price;
    this.details=this.service.details;
      
    var id=localStorage.getItem('id');

  
    this.item = this.service.redirectpage(id);
    //if(this.service.flag == 1)
   // {
      //alert(this.item);
     
    //}
  }

  

  ngOnInit() {
    this.name=this.service.pname;
    this.price=this.service.price;
    this.details=this.service.details;
  }

}
