import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-clock-speed',
  templateUrl: './filter-clock-speed.component.html',
  styleUrls: ['./filter-clock-speed.component.css']
})
export class FilterClockSpeedComponent implements OnInit {
  private isShow: boolean;
  private flagforvaluesoffilterRAM: boolean;
  private angleclass: string;
  private myclassforitag:string;
  private flagforvaluesoffilterRAMclearall:boolean;
  
  constructor() {
    this.isShow = true;
    this.flagforvaluesoffilterRAM = true;
    this.angleclass = "";
    this.flagforvaluesoffilterRAMclearall=true;  
    this.myclassforitag='fas fa-angle-down';
  }

  ngOnInit() {
  }
  doshowhideonfilterRAM(event: Event): void {
    //  console.log("hi.."+event.target.value);
    if (!this.isShow) {
      console.log("false");
      this.flagforvaluesoffilterRAM = false;
      this.myclassforitag = 'fas fa-angle-up';
      this.isShow = !this.isShow;
    }
    else if (this.isShow) {
      console.log("true");
      this.flagforvaluesoffilterRAM = true;
      this.myclassforitag = 'fas fa-angle-down';
      this.isShow = !this.isShow;

    }

  }
}
