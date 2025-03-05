import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { MaterialComponent } from './material/material.component';
import { PipeComponent } from './pipe/pipe.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home'},
    {path: 'signup', component: SignupComponent, title: 'signup'},
    {path: 'login', component: LoginComponent, title: 'login'},
    {path: 'home', redirectTo:'', pathMatch:'full'},
    {path: 'user', children:[
        {path:'', component: UsersComponent, title: 'user'}, 
        {path:'profile/:name', component: ProfileComponent, title: 'profile'}
    ]},
    {path: 'material', component:MaterialComponent, title: 'Material'}, 
    {path: 'pipe', component: PipeComponent, title: 'Pipes'}, 
    {path: '**', component: PageNotFoundComponent, title: '404 | Page not found'}, 
];