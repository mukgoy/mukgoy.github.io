import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { PostService } from 'src/app/admin/services/post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  postId: number = 0;
  postdata:any = {};
  title:string = "";
  content:string = "";
  constructor(
    public postService : PostService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.route.params.subscribe(params => {
      this.postId = +params['postId'];
      this.postdata = this.postService.posts.find((post)=>{
        if(post.id == this.postId){
          return true
        }
        return false
      })

      this.title = this.postdata.title;
      this.content = this.postdata.content;

    });
  }

  ngOnInit(): void {
  }

  edit(){

    this.postService.posts.find((post)=>{
        if(post.id == this.postId){
          post.title = this.title;
          post.content = this.content;
          post.date = "05-08-2022";
          return true
        }
        return false
    })

    this.router.navigate(['posts']);

  }




}
