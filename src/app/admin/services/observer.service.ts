import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Subject, tap } from 'rxjs';

let userdata1 = {
  name : "mukesh",
  email : "mukesh@gmail.com",
  // userType: "admin"
}

@Injectable({
  providedIn: 'root'
})
export class ObserverService {

  private userdata:any = new BehaviorSubject({});

  constructor() { 
    let userdata = localStorage.getItem("userdata") || "{}";
    this.userdata.next(JSON.parse(userdata));

    this.userdata.subscribe((userdata:any)=>{
      localStorage.setItem("userdata", JSON.stringify(userdata))
    })


    // setTimeout(()=>{
    //   this.userdata.next(userdata1)
    // },5000)

    let count = 0;
    setInterval(()=>{
      this.userdata.next({...userdata1, count});
      count++;
    },3000)
  }


  get userdataPipe(){
    return this.userdata.pipe(
      filter((item:any, index:number)=>{
        // console.log(item,index );
        return item.count % 3 == 0;
      })
    );
  }

  

 
}
