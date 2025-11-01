// src/app/components/search/search.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
@Component({selector: 'app-search', templateUrl: './search.component.html'})
export class SearchComponent {
  query = '';
  @Output() search = new EventEmitter<string>();
  onSearch() { this.search.emit(this.query); }
}
