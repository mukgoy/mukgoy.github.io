import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SquarePipe } from './pipes/square.pipe';



@NgModule({
  declarations: [
    FooterComponent,
    SquarePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[FooterComponent, SquarePipe]
})
export class SharedModule { }
