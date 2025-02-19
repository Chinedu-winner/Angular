import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    username = 'Ajadi'; 
    users = ['James', 'Blessing', 'Peace', 'Wonder']

    changeUsername(name:string){
      this.username = name;
      console.log(this.username);
      
    }
  constructor() { }
}
