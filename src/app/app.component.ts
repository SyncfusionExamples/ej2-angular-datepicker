import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatePickerComponent } from '@syncfusion/ej2-ng-calendars';
//import my custom timezone function
import { getTimezoneName } from './timeZone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public value: Date = new Date();
  public dateFormat: string;
  
  ngAfterViewInit(): void {
    // based on system time zone the datepicker display format will be updated
    this.dateFormat = getTimezoneName();
  }
}
