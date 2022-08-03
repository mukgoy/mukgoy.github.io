import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/admin/services/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public postService : PostService) { }

  ngOnInit(): void {
  }

  delete(postId:number){
    console.log(postId)
    this.postService.posts = this.postService.posts.filter((post)=>{
      return post.id !== postId
    })
  }

}
