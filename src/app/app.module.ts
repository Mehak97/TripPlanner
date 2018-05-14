import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FavouriteSpotsComponent } from './favourite-spots/favourite-spots.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import { CalendarDemoComponent } from './calendar-demo/calendar-demo.component';


const appRoute:Routes=[
  {
    path:'', redirectTo:'home' , pathMatch:'full'
  },
  {
    path:'home' , component:MainPageComponent
  },
  {
    path:'Paris',component:FavouriteSpotsComponent
  },
  {
    path:'Dubai',component:FavouriteSpotsComponent
  },
  {
    path:'Singapore',component:FavouriteSpotsComponent
  },
  {
    path:'Thailand',component:FavouriteSpotsComponent
  },
  {
    path:'Greece',component:FavouriteSpotsComponent
  },
  {
    path:'Prague',component:FavouriteSpotsComponent
  },
  {
    path:'Manali',component:FavouriteSpotsComponent
  },
  {
    path:'London',component:FavouriteSpotsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    FavouriteSpotsComponent,
    CalendarDemoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    CalendarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

