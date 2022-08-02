import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  uid: string = "5665466";
  ustr: string = "5665466";

  constructor(private route:ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) =>{
      this.uid = params['uid'];
      this.ustr = params['ustr'];
      console.log(this.ustr)
    })
  }

}
