import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-table',
  templateUrl: './select-table.component.html',
  styleUrls: ['./select-table.component.scss']
})


export class SelectTableComponent implements OnInit {
  
  tables:string[]= ["Table 1","Table 2","Table 3","Table 4","Table 5"]  // se crea un array para generar un select dinámico
  dinnerForm: FormGroup;

  constructor(
  private formBuilder: FormBuilder,
  private router: Router,
  ) { 
    this.createForm();
  }
  createForm(){
    this.dinnerForm = this.formBuilder.group({
      selectTables:'',
      name:'',
    });
  }
  ngOnInit():void { 
  }
  
  onSubmit() {
    // Process checkout data here
    let infoTable = this.dinnerForm.value
    console.log("Your order has been submitted", infoTable);
    this.router.navigate(['/waiter/create-order', infoTable]);

    }
}

