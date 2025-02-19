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

  user:Array<String> = []

  ngOnInit() : void  {
    this.user = this._auth.users
  }
}
