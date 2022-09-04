import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss'],
})
export class TablePageComponent {
  data: Movie[] = [];
  movies: Movie[]  = [];
  years: string[] = ['All years'];

  selectedYear?: string;
  selectedCriteria: string = '';

  constructor(readonly http: HttpClient) {
    this.http.get('./assets/data.json').subscribe((data: any) => {
      this.data = data as Movie[];
      this.movies = this.data;

      // Define the value available for the filter in descending order
      for (const element of data) {
        if (!this.years.includes(element.startYear)) {
          this.years.push(element.startYear);
        }
      }
      this.years.sort((a, b) => parseInt(b) - parseInt(a));
    });
  }

  filterByYear(event: any): void {
    this.selectedYear = event;    
    
    if(this.selectedYear == 'All years') {
      this.movies = this.data;
    } else {
      this.movies = this.data.filter((element) => element.startYear == event);
    }
  }

  search(criteria: any): void { 
    this.selectedCriteria = criteria.toLowerCase();

    // Reset data if no criteria
    if(this.selectedCriteria == '') {
      if (this.selectedYear) {
        this.filterByYear(this.selectedYear);
        return;
      } else {
        this.movies = this.data;
        return;
      }
    }

    // Check if data is filtered by year and filter with input criteria
    if (this.selectedYear) {
      this.filterByYear(this.selectedYear);
      this.movies = this.movies.filter(
        (element) =>
          element.originalTitle.toLowerCase().includes(this.selectedCriteria) ||
          element.primaryTitle.toLowerCase().includes(this.selectedCriteria)
      );      
    } else {      
      this.movies = this.data.filter(
        (element) =>
          element.originalTitle.toLowerCase().includes(this.selectedCriteria) ||
          element.primaryTitle.toLowerCase().includes(this.selectedCriteria)
      );      
    }
  }

  updateData(event: any): void {
    let index = this.data.findIndex(element => element.tconst == event.tconst);
    this.data[index] = event;
  }
}
