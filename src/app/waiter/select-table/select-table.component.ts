import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-select-table',
  templateUrl: './select-table.component.html',
  styleUrls: ['./select-table.component.scss']
})
export class SelectTableComponent implements OnInit {
  dinerForm;
  

  
  constructor(
    public formBuilder: FormBuilder,
  ) { 
    this.dinerForm = this.formBuilder.group({
      name: '',
  }

  ngOnInit(a,b) {
  }
  

}
