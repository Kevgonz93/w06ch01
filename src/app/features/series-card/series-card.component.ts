import { Component, Input } from '@angular/core';
import { Serie } from '../../core/model/model';

@Component({
  selector: 'app-series-card',
  standalone: true,
  imports: [],
  template: `
  <div>
    <h2> {{serieInfo.name}}</h2>
    <div>
      {{ serieInfo.onAir? '🟢':'🔴'}}
    </div>
  </div>
  <div>
    <ul>
      <li>Género: {{serieInfo.gender}}</li>
      <li>Lanzamiento: {{ serieInfo.realseYear}}</li>
      <li>Episodios: {{serieInfo.episodes}}</li>
    </ul>
  </div>
  `,
  styles: ''
})
export class SeriesCardComponent {

@Input() serieInfo!: Serie;

}
