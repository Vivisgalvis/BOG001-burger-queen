import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ItemPedido } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-order-summary-component',
  templateUrl: './order-summary-component.component.html',
  styleUrls: ['./order-summary-component.component.scss']
})
export class OrderSummaryComponentComponent implements OnInit {
  @Input() item: ItemPedido;
  
  
  orderSummary:any[]=[];
 
  constructor() {
    
   }
   ngOnChanges(changes: SimpleChanges){
    console.log(changes)
    if(changes.item && changes.item.currentValue != undefined){
      this.orderSummary.push(changes.item.currentValue)
    }
    console.log(this.orderSummary)

   }

  ngOnInit(): void {
   
  }
  
   
   

}
