import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearcherService {

  private url: string;
  constructor(private http: Http) {
    this.url = 'http://localhost:3000/api/';
  }


  public getList(text: string) {
    text = text.split(' ').join('_');
    return this.http.get(this.url + 'search/' + text)
    .map(response => response.json());
  }
}
