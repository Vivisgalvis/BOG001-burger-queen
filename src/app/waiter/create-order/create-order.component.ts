import { Component, OnInit } from '@angular/core';
//import { DataService } from '../../data.service';
import { ActivatedRoute} from '@angular/router';
//import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  numberTable: string;
  nameDiner: string;
  type: string;
 // data:Menu;

  /* aquí obtenemos el JSON desde la url de github usando raw, luego usamos subscribe y se obtiene la respuesta (res de tipo any) y 
  la guardamos en una constante llamada data */
  constructor(
    //private dataService: DataService,
    private route: ActivatedRoute,
    ){    
  }

  ngOnInit(): void {
    this.numberTable = this.route.snapshot.paramMap.get('selectTables');
    this.nameDiner = this.route.snapshot.paramMap.get('name');

    if(this.type === "breakfast"){
      console.log("estamos en breakfast")
    }else{
      console.log("estamos en lunch")
    }
    console.log(this.numberTable, this.nameDiner);

    /*this.dataService.getData()
    .subscribe((res:Menu) => {
      this.data =res;
    //Vamos a recorrer la data
      console.log(this.data);
      console.log(typeof(res));
      //data.menu se esta trayendo la data del json 
      res.menu.forEach(element => {
        console.log(element.name); 
      });   
    });*/

  }

}

