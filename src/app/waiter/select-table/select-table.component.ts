import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-table',
  templateUrl: './select-table.component.html',
  styleUrls: ['./select-table.component.scss']
})


export class SelectTableComponent implements OnInit {
  tables:string[]= ["# 1","# 2","# 3","# 4","# 5"]  // se crea un array para generar un select dinámico
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
  
  onSubmit(type) {
    // Process checkout data here
    console.log(type)
    let infoTable = this.dinnerForm.value
    infoTable ["type"] = "breakfast"
    console.log("Your order has been submitted", infoTable);
    this.router.navigate(['/waiter/create-order', infoTable]);

    }
}

