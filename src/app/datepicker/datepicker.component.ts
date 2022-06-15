import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent  {

 
    selectedday=[0,1,3]
     myDateFilter = (d: Date | null): boolean => {
       const day = (d || new Date()).getDay();
       return (day === this.selectedday[0] || day===this.selectedday[1] || day === this.selectedday[2] || day===this.selectedday[3] || day === this.selectedday[4] || day===this.selectedday[5] || day === this.selectedday[6]);
       } 
}