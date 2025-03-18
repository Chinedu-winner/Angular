import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';
import { BehaviourService } from '../service/behaviour.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, FormsModule,RouterLink, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  constructor(private _behaviour: BehaviourService){}

  username = ''
  ngOnInit(): void{
    this._behaviour.username.subscribe((name)=> this.username = name) 
  }

  message = 'Hello child. This is your mother' 

  item = '';
  cart:any = []

  addTocart(){
    this.cart.push(this.item)
  }

  changeUser(){
    this._behaviour.updatUser('Adedotun'); 
    console.log(this._behaviour.user);
    
  }
}
