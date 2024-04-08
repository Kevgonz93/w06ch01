import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SeriesListComponent} from './features/series-list/series-list.component';


@Component({
    selector: 'app-root',
    standalone: true,
    template: `
  <h1>{{ title}}</h1>
  <app-series-list />
  <router-outlet />`,
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SeriesListComponent]
})

export class AppComponent {
  title = 'w06ch01 - Series List';
}
