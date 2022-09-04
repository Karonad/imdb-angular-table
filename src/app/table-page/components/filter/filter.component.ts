import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Input() years: string[] = [];
  @Output() selectedYear = new EventEmitter<string>();


  constructor() { }

  filter(event: any):void {
    this.selectedYear.emit(event.value)
  } 

}
