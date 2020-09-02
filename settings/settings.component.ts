import { Component, OnInit } from '@angular/core';
import {Router, Route} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class SettingsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
