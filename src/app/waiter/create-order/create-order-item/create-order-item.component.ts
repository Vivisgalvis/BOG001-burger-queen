import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-create-order-item',
  templateUrl: './create-order-item.component.html',
  styleUrls: ['./create-order-item.component.scss']
})
export class CreateOrderItemComponent implements OnInit {
  data:Menu;
  @Input()typeItem: string; // el input es para pasar datos del papa al hijo. Estamos llamando Type

  constructor(

    private dataService: DataService,
  
  ) { }

  ngOnInit(): void {
    /*llamamos al servicio dataService y utilizamos subscribe (para suscribirnos a él) y tener la información del json 
    disponible la cual guardamos en una variable llamada data.*/

    this.dataService.getData()
    .subscribe((res:Menu) => {
      this.data =res;
      //data.menu se esta trayendo la data del json  
    });
    
  }

}
