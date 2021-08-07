import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-myparent',
  templateUrl: './myparent.component.html',
  styleUrls: ['./myparent.component.css']
})
export class MyparentComponent implements OnInit {

  currentItem = 'Television';
  items = ['item1', 'item2', 'item3', 'item4'];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: string) {
    this.items.push(newItem);
  }

}
