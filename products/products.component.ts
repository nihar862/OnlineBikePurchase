import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class ProductsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
