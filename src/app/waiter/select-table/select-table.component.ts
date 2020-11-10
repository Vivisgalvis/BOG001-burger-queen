import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';

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
  ) { 
    this.createForm();
    
  }
  createForm(){
    this.dinnerForm = this.formBuilder.group({
    });
  }
  ngOnInit():void {; 
  }

  onSubmit() {
    // Process checkout data here
    let infoTable= this.dinnerForm.value
    this.dinnerForm.reset();

    console.warn('Your order has been submitted');
    }
}

