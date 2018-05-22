import { Component } from '@angular/core';
import {LocationInfo} from './locationinfo.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LocationInfo]
})
export class AppComponent {
  title = 'app';
}
