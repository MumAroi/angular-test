import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort, MatSortable, MatPaginator } from '@angular/material';

import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user.model';

import * as decode from 'jwt-decode';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<User[]>;
  displayedColumns = ['user_id', 'first_name', 'last_name', 'email', 'phone_number', 'action'];

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log(decode(localStorage.getItem('token')));
    this.fetchUserData();
  }

  fetchUserData() {
    this.userService.getUser().subscribe(
      (resp: any) => {
        if (!resp) { return; }
        this.dataSource = new MatTableDataSource(resp);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(resp);
      },
      err => {
        console.log(err);
      }
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
