import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms'
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import * as bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import*as bootstrap from "./common.js"

const Raven = require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');

import { AppComponent } from './app.component';
// import { HeaderComponent } from './components/Header/header.component';
// import { LoadingComponent } from './shared/loading/loading.component';
// import { ContactComponent } from './pages/Contact/contact.component';
// import { ProjectComponent } from './pages/Project/project.component';
// import { HomeView } from './pages/Home/home-view.component';
// import { AboutView } from './pages/Aboutme/about.component';
// import { ArticleComponent } from './pages/Article/article.component';

import { LoadingService } from './services/loading.service';
import { SharedService } from './services/shared.service';
import { AuthService } from './services/auth.service';
import {SliderComponent} from "./slider/slider.component";
import {FooterComponent} from "./footer/footer.component";
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";

@NgModule({
	imports: [
    CommonModule,
    HttpModule,
    TransferHttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'about', component: AboutComponent}
    ])
	],
	declarations: [
	  AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent
  ],
  providers: [ LoadingService, AuthService, SharedService ],
  exports: [ AppComponent ]
})
export class AppModule {}
