import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  numberTable: string;
  nameDiner: string;

  /* aquí obtenemos el JSON desde la url de github usando raw, luego usamos subscribe y se obtiene la respuesta (res de tipo any) y 
  la guardamos en una constante llamada data */
  constructor(
    private json: DataService,
    private route: ActivatedRoute,
    ){    
  }

  ngOnInit(): void {
    this.numberTable = this.route.snapshot.paramMap.get('selectTables');
    this.nameDiner = this.route.snapshot.paramMap.get('name');

    console.log(this.numberTable, this.nameDiner);

    this.json.getData('https://raw.githubusercontent.com/ljohanaalvarez/BOG001-burger-queen/master/src/app/data.json')
    .subscribe((res: any) => {
      
    //Vamos a recorrer la data
      console.log(res);
      console.log(typeof(res));
      res.menu.forEach(element => {
        console.log(element.name);  
      });   
    });

  }

}

