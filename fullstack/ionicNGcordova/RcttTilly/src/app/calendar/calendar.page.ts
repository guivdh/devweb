import { Component, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss']
})
export class calendarPage {

  constructor() {}
  
  
  currentDate = new Date();
  currentMonth: string;


  @ViewChild(CalendarComponent, {static: false}) tillyCalendar: CalendarComponent;

  onViewTitleChanged(title: string) {
    this.currentMonth = title;
  }

}
