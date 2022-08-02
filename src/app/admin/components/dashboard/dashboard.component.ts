import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  postService1 = new PostService()
  
  constructor(public postService :PostService) { }

  ngOnInit(): void {
    // this.postService1.myname = "yourNMAE"
    // this.postService.myname = "yourNMAE"
  }

}
