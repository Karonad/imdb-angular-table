import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @Input() selectedCriteria = '';
  @Output() selectedCriteriaChange = new EventEmitter<string>();


  constructor() { }

  emitCriteria() {    
    this.selectedCriteriaChange.emit(this.selectedCriteria)
  }

}
