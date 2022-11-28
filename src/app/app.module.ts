import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddnewsComponent } from './addnews/addnews.component';
import { ViewnewsComponent } from './viewnews/viewnews.component';
import { Route, RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:AddnewsComponent
  },
  {
    path:"viewnews",
    component:ViewnewsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddnewsComponent,
    ViewnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
