import { Component, OnInit } from '@angular/core';
import * as decode from 'jwt-decode';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  userDetail: {};

  ngOnInit() {
    console.log(decode(localStorage.getItem('token')));
  }

}
