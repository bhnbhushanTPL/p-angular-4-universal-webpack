import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { Response} from '@angular/http';
import {Constant} from "../shared/constants";
// import '../../assets/images/build.png';
//
// var require: any;



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = { advantages : {}, popularChats: {}, buildSection: {}, graphSection: {} };

  constructor(meta: Meta, title: Title, public http: Http) {
    title.setTitle('Predictika | Home');

    meta.addTags([
      {
        name: 'author', content: 'techprimelab.com'
      },
      {
        name: 'keywords', content: 'chatbot'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ]);

  }

  ngOnInit() {

    this.http.get(Constant.url+'/api/homeData')
      .subscribe(res => {
        this.data = res.json();
      });
  }

}
