import { Component, inject } from '@angular/core';
import { PostService } from '../services/post.service';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-pipe',
  imports: [CommonModule, TruncatePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  constructor(
    private _postService: PostService
  ){}

  dialog = inject(MatDialog) 

  posts: any =[];

  ngOnInit(): void{
    this._postService.getPost().subscribe({
      next: (res) =>{
        this.posts = res;        
      },
      error: (err) =>{
        console.log(err);        
      }
    })
  }

  openDialog(enterAnimationDuration:string, exitAnimationDuration: string, message:string):void{[
    this.dialog.open(DialogComponent, {
      width: '500px', 
      enterAnimationDuration,
      exitAnimationDuration, 
      data: {
        dialog_message:message
      }
    }      
    )
  ]}
}