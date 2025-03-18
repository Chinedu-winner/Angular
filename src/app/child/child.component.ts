import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BehaviourService } from '../service/behaviour.service';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent { 
  username= ''
  constructor(private _behaviour: BehaviourService){}

  ngOnInit(): void{
    this._behaviour.username.subscribe(name => this.username = name)
  }
  
@Input() msg!: string; 
@Input() mycart!:Array<any>; 
}
