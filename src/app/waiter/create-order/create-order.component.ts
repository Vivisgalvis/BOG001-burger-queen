import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

/*interface User {
  name: string;
  lastname: string;
}*/

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {



  /* aquí obtenemos el JSON desde la url de github usando raw, luego usamos subscribe y se obtiene la respuesta (res de tipo any) y 
  la guardamos en una constante llamada data */
  constructor(public json: DataService) {
    
  }

  ngOnInit(): void {
    this.json.getData('https://raw.githubusercontent.com/ljohanaalvarez/BOG001-burger-queen/master/src/app/data.json')
    .subscribe((res: any) => {
      
      
    //Vamos a recorrer la data
      console.log(res);
      console.log(typeof(res));
      res.menu.forEach(element => {
        console.log(element.name);  
      });   
    })
  }

}

