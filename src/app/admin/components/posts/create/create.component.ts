import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/admin/services/post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(
    public postService : PostService,
    private router: Router
  ) { }

  title:string = ""
  content:string = ""

  ngOnInit(): void {
  }

  create(){

    let id = 1;
    this.postService.posts.map((post)=>{
      if(post.id > id){
        id = post.id;
      }
    })
    id++;

    this.postService.posts.push({
      id,
      title : this.title,
      content : this.content,
      date:"31-06-2021"
    })

    console.log(this.postService.posts)

    this.router.navigate(['posts']);
  }

}
