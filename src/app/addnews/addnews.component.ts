import { Component } from '@angular/core';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent {

  id=""
  name=""
  title=""
  description=""
  url=""
  urlimage=""
  publishedat=""
  content=""

  readValues=()=>
  {
    let data:any=
    {
      "id":this.id,
      "name":this.name,
      "title":this.title,
      "description":this.description,
      "url":this.url,
      "urlimage":this.urlimage,
      "publishedat":this.publishedat,
      "content":this.content
    }
    console.log(data)
  }



}
