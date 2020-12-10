import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { ItemPedido, Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-create-order-item',
  templateUrl: './create-order-item.component.html',
  styleUrls: ['./create-order-item.component.scss']
})
export class CreateOrderItemComponent implements OnInit {
  data:Menu;
  modalBurguer: boolean;
  pedido:ItemPedido;
  @Input()typeItem: string; // el input es para pasar datos del papa al hijo. Estamos llamando Type
  @Output() stateModalBurguer = new EventEmitter<boolean>();
  @Output() itemOrder = new EventEmitter<ItemPedido>();



  constructor(

    private dataService: DataService,
    private router:Router
  
  ) { }

  ngOnInit(): void {
    
    /*llamamos al servicio dataService y utilizamos subscribe (para suscribirnos a él) y tener la data disponible*/
    this.dataService.getData()
    .subscribe((res:Menu) => {
      this.data =res;
      //data.menu se esta trayendo la data del json  
    });
  }

  onSubmit(value) {
    // Process checkout data here
    this.modalBurguer = value;
    console.log(this.modalBurguer);
    this.stateModalBurguer.emit(this.modalBurguer)
    
    }

    getItem(name:string, price:number, image:string){
        this.pedido = {
        "name":name,
        "price":price,
        "image":image
      }
      this.itemOrder.emit(this.pedido)
      console.log(this.pedido)

    }
   

}
