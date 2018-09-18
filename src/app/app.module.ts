import { Project3Component } from './shared/components/projects/project3/project3.component';
import { Project2Component } from './shared/components/projects/project2/project2.component';
import { Project1Component } from './shared/components/projects/project1/project1.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Project1Component,
    Project2Component,
    Project3Component
  ],
  imports: [
    BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
