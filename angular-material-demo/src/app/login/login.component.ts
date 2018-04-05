import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import * as decode from 'jwt-decode';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
const headers: { } = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) {
  }

  username: string;
  password: string;
  userDetail: {};

  ngOnInit() {
  }

  login(): void {
    // if (this.username === 'admin' && this.password === 'admin') {
      this.http.post('http://localhost:3000/api/login', '', headers).subscribe(
        resp => {
          localStorage.setItem('token', resp['token']);
          this.userDetail = decode(localStorage.getItem('token'));
          console.log(this.userDetail);
          if (this.userDetail['user']['id']) {
            this.router.navigate(['user']);
          }
        },
        err => {
          console.log(err);
        }
      );
    // } else {
    //   alert('Invalid credentials');
    // }
  }

}
