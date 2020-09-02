import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { JoinService } from '../join.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class BikesComponent implements OnInit {
  model:string;price:string;detail1:string;detail2:string;detail3:string;
  constructor(private router:Router, private itemservice:JoinService) { }

  itemdetail(model,price,detail1,detail2,detail3){
      var name = "nihar";
      var contact = "1234567890";
      console.log(model+price+detail1+detail2+detail3);
        if(model&&price&&detail1&&detail2&&detail3)
        var details=detail1+detail2+detail3
        this.itemservice.pname=model;
        this.itemservice.price=price;
        this.itemservice.details=details;
    this.itemservice.itemdetail(model,price,details,name,contact);
  }


  ngOnInit() {
  }

}
