import { Component, OnInit, inject, Output, EventEmitter } from '@angular/core';
//import { createSocket } from 'dgram';

@Component({
  selector: 'app-order-item-options-modal',
  templateUrl: './order-item-options-modal.component.html',
  styleUrls: ['./order-item-options-modal.component.scss']
})
export class OrderItemOptionsModalComponent implements OnInit {

@Output() close = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(value){
    this.close.emit(value);
    console.log(value)
  }

}
