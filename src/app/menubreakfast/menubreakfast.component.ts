import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-menubreakfast',
  templateUrl: './menubreakfast.component.html',
  styleUrls: ['./menubreakfast.component.scss']
})
export class MenubreakfastComponent implements OnInit {

  constructor(public json: DataService) {this.json.getData('https://raw.githubusercontent.com/ljohanaalvarez/BOG001-burger-queen/master/src/app/data.json')
  .subscribe((res: any) => {
    console.log(res);
  } ) }

  ngOnInit(): void {
  }

}



//import { Component, OnInit } from '@angular/core';
//import { DataService } from '../data.service';


/*@Component({
  selector: 'app-menubreakfast',
  templateUrl: './menubreakfast.component.html',
  styleUrls: ['./menubreakfast.component.scss']
})
export class MenubreakfastComponent implements OnInit {

  /*constructor(public json: DataService) { 
    this.json.getData('https://raw.githubusercontent.com/ljohanaalvarez/BOG001-burger-queen/master/src/app/data.json').subscribe((res: any) => {
      console.log(res);
    } )
  }*/

  


