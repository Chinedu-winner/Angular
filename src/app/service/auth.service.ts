import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    username = 'Ajadi'; 
    users = ['James', 'Blessing', 'Peace', 'Glory', 'Chioma', 'Wonder']

    changeUsername(name:string){
      this.username = name;
      console.log(this.username);
      
    }
  constructor(
    private _http: HttpClient
  ) { }

  url = 'https:jsonplaceholder.typicode.com/users';
  Posturl = 'https://jsonplaceholder.typicode.com/posts'

  fetchUsers(){
      return this._http.get(this.url)
  }

  fetchViews(){
      return this._http.get(this.Posturl)
  }
}
