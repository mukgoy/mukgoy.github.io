import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BodyAdvtComponent } from './components/shared/body/body-advt/body-advt.component';
import { BodyContentComponent } from './components/shared/body/body-main/body-content/body-content.component';
import { BodyMainComponent } from './components/shared/body/body-main/body-main.component';
import { LeftMenuComponent } from './components/shared/body/body-main/left-menu/left-menu.component';
import { BodyComponent } from './components/shared/body/body.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderBottomComponent } from './components/shared/header/header-bottom/header-bottom.component';
import { HeaderTopComponent } from './components/shared/header/header-top/header-top.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { Sec1Component } from './components/shared/section/sec1/sec1.component';
import { Sec2Component } from './components/shared/section/sec2/sec2.component';
import { Sec3Component } from './components/shared/section/sec3/sec3.component';
import { SectionComponent } from './components/shared/section/section.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderTopComponent,
    HeaderBottomComponent,
    BodyComponent,
    BodyMainComponent,
    LeftMenuComponent,
    BodyContentComponent,
    BodyAdvtComponent,
    SectionComponent,
    Sec1Component,
    Sec2Component,
    Sec3Component,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
