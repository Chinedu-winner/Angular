import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home'},
    {path: 'signup', component: SignupComponent, title: 'signup'},
    {path: 'login', component: LoginComponent, title: 'login'},
    {path: 'home', redirectTo:'', pathMatch:'full'},
    {path: 'user', children:[
        {path:'', component: UsersComponent}, 
        {path:'profile', component: ProfileComponent}
    ]},
    {path: '**', component: PageNotFoundComponent, title: '404 | Page not found'}
];