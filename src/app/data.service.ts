import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('https://raw.githubusercontent.com/ljohanaalvarez/BOG001-burger-queen/master/src/app/data.json');
  }
}
