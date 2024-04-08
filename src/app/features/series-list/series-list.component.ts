import { Component, OnInit } from '@angular/core';
import { Serie } from '../../core/model/model';
import { repo } from '../../core/model/data';
import { SeriesCardComponent } from "../series-card/series-card.component";

@Component({
    selector: 'app-series-list',
    standalone: true,
    template: `
    <h2>30 Series que deberías ver</h2>
    <ul>
      @for (item of seriesList; track $index) {
        <li>
          <app-series-card [serieInfo]="item"/>
        </li>
      }
    </ul>
  `,
    styles: ``,
    imports: [SeriesCardComponent]
})
export  class SeriesListComponent implements OnInit{
seriesList: Serie[] = []

ngOnInit(): void {
  repo.getSeries().then((seriesList) => {
    this.seriesList = seriesList
  })
}
}
