import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {FormControl} from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-my-material',
  templateUrl: './my-material.component.html',
  styleUrls: ['./my-material.component.css']
})
export class MyMaterialComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;
  
  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
