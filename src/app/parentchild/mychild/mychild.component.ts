import { Component, OnInit , Input ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mychild',
  templateUrl: './mychild.component.html',
  styleUrls: ['./mychild.component.css']
})
export class MychildComponent implements OnInit {

  @Input() item = '';
  @Output() newItemEvent = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
