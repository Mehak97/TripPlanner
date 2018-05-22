import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import  {LocationInfo} from '../locationinfo.service';
import {Router} from '@angular/router';
/// { ModalDirective } from 'your-path-to/typescripts/free';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  //constructor(private router:Router) { }

  constructor(){}
  ngOnInit() {
  }

  /*onSelect(place)
  {
    console.log("shukr hai ");
    this.router.navigate(['/home',place.id]);
      // call of placese component
  }*/
  } 
  
              
