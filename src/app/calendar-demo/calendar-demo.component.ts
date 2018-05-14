import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-demo',
  templateUrl: './calendar-demo.component.html',
  styleUrls: ['./calendar-demo.component.css']
})
export class CalendarDemoComponent implements OnInit {

  constructor() { }

      date3: Date;
     /* date2: Date;
      date3: Date;
      date4: Date;
      date5: Date;
      date6: Date;
      date7: Date;
      date8: Date;
      date9: Date;
      date10: Date;
      date11: Date;*/
      //dates: Date[];
      
      //rangeDates: Date[];
      
      minDate: Date;
      
     maxDate: Date;
      
     // invalidDates: Array<Date>;
      
      es: any;
  
      ngOnInit() {
        this.es = {
          firstDayOfWeek: 1,
          dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"],
          monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ],
          monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
          today: 'Today',
          clear: 'Clear'
      };
          

          let today = new Date();
          let month = today.getMonth();
          let year = today.getFullYear();
          let prevMonth = (month === 0) ? 11 : month -1;
          let prevYear = (prevMonth === 11) ? year - 1 : year;
          let nextMonth = (month === 11) ? 0 : month + 1;
          let nextYear = (nextMonth === 0) ? year + 1 : year;
          this.minDate = new Date();
          this.minDate.setMonth(prevMonth);
          this.minDate.setFullYear(prevYear);
          this.maxDate = new Date();
          this.maxDate.setMonth(nextMonth);
          this.maxDate.setFullYear(nextYear);
          
         /* let invalidDate = new Date();
          invalidDate.setDate(today.getDate() - 1);
          this.invalidDates = [today,invalidDate];*/
      }
}
