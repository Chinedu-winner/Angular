import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
  
})
export class HomeComponent {
  title = 'angular-intro';
  num1 = 40;
  num2 = 22; 

  isSeeFood = true;

  userName: string = ""
  age: number = 2
  studentArray:any = []


  myFunction() {
    let nameObj = {userName: this.userName, age: this.age}
    this.studentArray.push(nameObj)
    console.log(this.userName);   
  }
}
