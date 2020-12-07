import { Component, OnInit, inject, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Menu } from 'src/app/interfaces/menu';
//import { createSocket } from 'dgram';

@Component({
  selector: 'app-order-item-options-modal',
  templateUrl: './order-item-options-modal.component.html',
  styleUrls: ['./order-item-options-modal.component.scss']
})
export class OrderItemOptionsModalComponent implements OnInit {

  data:Menu;


@Output() close = new EventEmitter<string>();

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {

    this.dataService.getData()
    .subscribe((res:Menu) => {
      this.data =res;
      //data.menu se esta trayendo la data del json  
    });
    
  }

  closeModal(value){
    this.close.emit(value);
    console.log(value)
  }

}
