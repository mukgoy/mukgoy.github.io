import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-reactive-form',
  templateUrl: './create-reactive-form.component.html',
  styleUrls: ['./create-reactive-form.component.scss']
})
export class CreateReactiveFormComponent implements OnInit {

  form = new FormGroup({
    "title": new FormControl("", [Validators.required, Validators.max(6)]),
    "content": new FormControl("", [Validators.required, Validators.min(6)]),
  });
  constructor() { }

  ngOnInit(): void {

  }


  create(){
    if(this.form.valid){
      console.log(this.form.value)
    }else{
      console.log(this.form)
      alert("invalid");
    }
    
  }


  
}
