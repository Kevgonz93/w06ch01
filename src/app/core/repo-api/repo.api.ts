import { Serie } from "../model/model";

const urlBase = 'http://localhost:3000';

export class RepoSeries{
  urlSeries: URL;
  constructor(){
    this.urlSeries = new URL('series', urlBase)
  }
}
