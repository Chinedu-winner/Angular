import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { FormsModule,FormBuilder, Validators, FormGroup, ReactiveFormsModule, } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  standalone: true, 
})
export class SignupComponent {
    // userForm :FormGroup //creting a new instance of the FormGroup class 

    private  fb = inject(FormBuilder); 
  constructor(
    private _router : Router
  ) {}
  userForm = this.fb.group({ //Equating the formBuilder group to the userForm group
    'full_name': ['', [Validators.required, Validators.minLength(5)]],
    'email' : ['', [Validators.required, Validators.email]], 
    'phone_number' : ['', [Validators.required, Validators.minLength(11)]],
    'password' : ['',[Validators.required, Validators.minLength(8)]]
  })

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
      if (this.userForm.invalid){
        console.log(this.userForm.get('full_name')?.errors);       
      }else{
        const name = this.userForm.get('full_name')?.value?.replaceAll (' ', '-');
        console.log(name);
        
        this._router.navigate(['/user/profile', name])      
      }
      // const user = {full_name: this.full_name, email: this.email, phone_number: this.phone_number, password: this.password}
      // this.users.push(user)
      // localStorage.setItem('users', JSON.stringify(this.users))
      // console.log('user saved successfully');       
  }
}