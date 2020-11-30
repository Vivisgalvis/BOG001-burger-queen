import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Menu } from 'src/app/interfaces/menu';
//import { CreateOrderComponent } from '../create-order.component';

@Component({
  selector: 'app-create-order-item',
  templateUrl: './create-order-item.component.html',
  styleUrls: ['./create-order-item.component.scss']
})
export class CreateOrderItemComponent implements OnInit {
  data:Menu;

  constructor(
    private dataService: DataService,
   // public type: CreateOrderComponent
  ) { }

  ngOnInit(): void {

    this.dataService.getData()
    .subscribe((res:Menu) => {
      this.data =res;
    //Vamos a recorrer la data
      console.log(this.data);
      console.log(typeof(res));
      //data.menu se esta trayendo la data del json 
      res.menu.forEach(element => {
        console.log(element.name); 
      });   
    });
  }

}
