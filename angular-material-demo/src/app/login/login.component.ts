import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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

  ngOnInit() {
  }

  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.http.post('http://localhost:3000/api/login', '', headers).subscribe(
        resp => {
          console.log(resp);
        },
        err => {
          console.log(err);
        }
      );
      // this.router.navigate(['user']);
    } else {
      alert('Invalid credentials');
    }
  }

}
