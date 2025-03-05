import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../pipes/truncate.pipe';

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
}
