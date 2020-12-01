import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  numberTable: string;
  nameDiner: string;
  type: string;

  constructor(

    private route: ActivatedRoute,

    ){    
  }

  ngOnInit(): void {

    this.numberTable = this.route.snapshot.paramMap.get('selectTables');
    this.nameDiner = this.route.snapshot.paramMap.get('name');
    this.type = this.route.snapshot.paramMap.get('type');

  }
}

