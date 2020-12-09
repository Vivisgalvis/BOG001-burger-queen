import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Menu } from './interfaces/menu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  /* aquí obtenemos el JSON desde la url de github usando raw*/

  getData(): Observable<Menu>{
    return this.http.get<Menu>('https://raw.githubusercontent.com/ljohanaalvarez/BOG001-burger-queen/createOrder/src/app/data.json');
  }
}
