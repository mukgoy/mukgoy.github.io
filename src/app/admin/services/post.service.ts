import { Injectable } from '@angular/core';
export interface PostModel{
    id:number,
    title:string,
    content:string,
    date: string
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  myname:string = "mukesh 1256"

  posts: PostModel[] = [
    {
      id:1,
      title:"this is my first post",
      content:"my post content",
      date: "31-06-2021"
    },
    {
      id:2,
      title:"this is my first post 2",
      content:"my post content 2",
      date: "31-06-2021"
    }
  ]

  constructor() { }
}
