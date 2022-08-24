import { HttpClient } from '@angular/common/http';
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
    private http: HttpClient,
    public postService : PostService,
    private router: Router
  ) { }

  title:string = ""
  content:string = ""

  username:string = ""
  password:string = ""

  ngOnInit(): void {
    this.login();
    // this.createFAQ();
  }

  createHOLD(){
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

  create(){
      console.log({
        username : this.username,
        password : this.password,
      });


      let url = 'https://ai-lab-backend.herokuapp.com/api/v1/auth/login';
      let body = {
        username : this.username,
        password : this.password,
      };
      this.http.post(url, body).subscribe({
        next : (response:any)=>{
          // console.log(response)
          if(response.access_token){
            alert("Login Success")
            alert(response.access_token)

            localStorage.setItem("access_token", JSON.stringify(response))

          }
        },
        error:(error)=>{
          alert("Login Failed")
          console.log(error);
        }
      });


  }


  login(){

    console.log("login exec")
    this.http.post("https://ai-lab-backend.herokuapp.com/api/v1/auth/login", {
      "username": "m.goyal1988@gmail.com",
      "password": "Pass@123"
    }).subscribe({
      next:(response)=>{
        localStorage.setItem("userdata", JSON.stringify(response));
        this.createFAQ();
      },
      error:(error)=>{
        console.log(error)
      }
    });

  }

  createFAQ(){

    let userdata:any = localStorage.getItem("userdata") || "{}";
    userdata = JSON.parse(userdata)
    if(userdata?.access_token){
      console.log("createFAQ exec")
      this.http.post(
        "https://ai-lab-backend.herokuapp.com/api/v1/admin/faq", 
        {
          "question": "string",
          "answer": "string",
          "botId": "string"
        }, 
        {
          headers:{
            "Authorization": `Bearer ${userdata.access_token}`
          }
        }
      )
      .subscribe({
        next:(response)=>{
          console.log(response)
        },
        error:(error)=>{
          console.log(error)
        }
      });
    }else{
      alert("login required!");
    }

    

  }

}
