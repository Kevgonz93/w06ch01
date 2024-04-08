import { Serie } from "../model/model";

const urlBase = 'http://localhost:3000';

export class RepoSeries{
  
  urlSeries: URL;
  constructor(){
    this.urlSeries = new URL('series', urlBase)
  }


  async getAnyData(): Promise<Serie[]> {
    const response = await fetch(this.urlSeries);
    if (!response.ok) {
      const message = `Error fetching pets: ${response.status} ${response.statusText}`;
      throw new Error(message);
    }

    return response.json();
  }


}
