import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import { HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FavouriteSpotsComponent } from './favourite-spots/favourite-spots.component';
import { RouterModule,Routes} from '@angular/router';
import { CalendarDemoComponent } from './calendar-demo/calendar-demo.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PlacesComponent } from './places/places.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { SafePipe } from './safe.pipe';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelPaymentComponent } from './hotel-payment/hotel-payment.component';
import { BillingComponent } from './billing/billing.component';

const appRoute:Routes=[
  {
    path:'', redirectTo:'home' , pathMatch:'full'
  },
  {
    path:'home' , component:MainPageComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'Signup',component:SignupComponent
  },
  {
    path:'videos',component:PlacesComponent
  },
  {
    path:'hotelsdetails',component:HotelDetailComponent
  },
  {
    path:'hotel-payment',component:HotelPaymentComponent
  },
  {
    path:'billing',component:BillingComponent
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
    LoginComponent,
    SignupComponent,
    PlacesComponent,
    VideoListComponent,
    VideoDetailsComponent,
    SafePipe,
    HotelDetailComponent,
    HotelPaymentComponent,
    BillingComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

