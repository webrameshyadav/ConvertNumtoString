import { Component, Input, OnInit } from '@angular/core';

import { AdComponent } from '../ad-component';

@Component({
  selector: 'app-hero-profile-component',
  //templateUrl: './hero-profile-component.component.html',
  template: `
  <div class="job-ad">
    <h4>{{data.headline}}</h4>

    {{data.body}}
  </div>`,
  styleUrls: ['./hero-profile-component.component.css']
})
export class HeroProfileComponentComponent implements AdComponent {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() data: any;

}