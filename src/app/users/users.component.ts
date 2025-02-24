import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  constructor (
    private _auth: AuthService
  ){}

  user:any = []

  ngOnInit() : void  {
    this._auth.fetchUsers().subscribe({
      next: (res)=>{
        this.user = res;       
      }, 
      error : (err)=>{
        console.log(err);       
      }
    });
    // this._auth.fetchViews().subscribe({
    //   next: (res)=>{
    //     this.user = res;
    //   },
    //   error : (err)=>{
    //     console.log(err);
    //   }
    // })
  }
  
}
