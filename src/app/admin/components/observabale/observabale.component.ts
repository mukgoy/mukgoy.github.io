import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ObserverService } from '../../services/observer.service';

@Component({
  selector: 'app-observabale',
  templateUrl: './observabale.component.html',
  styleUrls: ['./observabale.component.scss']
})
export class ObservabaleComponent implements OnInit {

  userdata : any;
  userdata$ : any;
  constructor(
    private observerService : ObserverService
  ) {
    this.userdata$ = this.observerService.userdataPipe
  }

  ngOnInit(): void {
    this.observerService.userdataPipe.subscribe((userdata:any)=>{
      this.userdata = userdata;
    })
  }


  test(){

    

  }
}
