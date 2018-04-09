import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';

const routes: Routes = [
  { path: 'user',
    children: [
      {path: '', component: UserComponent},
      {path: 'create', component: UserCreateComponent}
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  // imports: [
  //   CommonModule
  // ],
  // declarations: []
})
export class AppRoutingModule { }
