import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  message = 'Hello child. This is your mother' 

  item = '';
  cart:any = []

  addTocart(){
    this.cart.push(this.item)
  }
}
