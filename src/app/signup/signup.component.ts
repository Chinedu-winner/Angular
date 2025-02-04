import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  ngOnInit(){
    this.users = JSON.parse(localStorage['users'])
    console.log(this.users);   
  }

  full_name = '';
  email = ''
  phone_number = ''
  password = ''

users:any = []

  register(){
      const user = {full_name: this.full_name, email: this.email, phone_number: this.phone_number, password: this.password}
      
      this.users.push(user)
      localStorage.setItem('users', JSON.stringify(this.users))
      console.log('user saved successfully');       
  }
}