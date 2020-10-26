import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  /* aquí obtenemos el JSON desde la url de github usando raw, luego usamos subscribe y se obtiene la respuesta (res de tipo any) y 
  la guardamos en una constante llamada data */

  constructor(public json: DataService) {this.json.getData('https://raw.githubusercontent.com/ljohanaalvarez/BOG001-burger-queen/master/src/app/data.json')
  .subscribe((res: any) => {

// Cómo tipar una variable como objeto?
// Que es subscribe y que hace como tal?

    const data: any = res.menu;

//Vamos a recorrer la data
    console.log(res);
    console.log(typeof(res));
    data.forEach(element => {
      console.log(element.image);
      
    });

   

  } ) }

  ngOnInit(): void {
  }

}




  


