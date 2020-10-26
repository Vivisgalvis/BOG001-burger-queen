import { Component } from '@angular/core';
//import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BurguerQueen';

  /*constructor(public json: DataService) { 
    this.json.getData('https://raw.githubusercontent.com/ljohanaalvarez/BOG001-burger-queen/master/src/app/data.json')
    .subscribe((res: any) => {
      console.log(res);
    } )
  }*/
}
