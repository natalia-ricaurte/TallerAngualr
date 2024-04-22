import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  

    constructor(private serieService: SerieService) {
      this.average = 0;
    }
    series: Array<Serie> = [];
    average: number;

    getSeries(){
      this.serieService.getSeries().subscribe(series => {
        this.series = series});
    }

    calculateAverage(serie: Serie[]): number {
      let totalSeasons = 0;
      for (let i = 0; i < serie.length; i++) {
        totalSeasons += serie[i].seasons;
      }
      return totalSeasons / serie.length;
    }

    getAverage(){
      this.serieService.getSeries().subscribe(series => {
        this.average = this.calculateAverage(series);
      });
    }


  ngOnInit() {
    this.getSeries();
    this.getAverage();
  }

}
