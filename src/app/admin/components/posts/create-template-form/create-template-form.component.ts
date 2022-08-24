import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-template-form',
  templateUrl: './create-template-form.component.html',
  styleUrls: ['./create-template-form.component.scss']
})
export class CreateTemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myClassName = "myClassName-5"

  create(myForm:any){
    console.log(myForm)
  }

  testClass(){
    return true
  }

}
