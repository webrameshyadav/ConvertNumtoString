import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mygrid',
  templateUrl: './mygrid.component.html',
  styleUrls: ['./mygrid.component.css']
})
export class MygridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'app';

	columnDefs = [
		{headerName: 'Make', field: 'make' },
		{headerName: 'Model', field: 'model' },
		{headerName: 'Price', field: 'price'}
	];

	rowData = [
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxter', price: 72000 }
	];

}
