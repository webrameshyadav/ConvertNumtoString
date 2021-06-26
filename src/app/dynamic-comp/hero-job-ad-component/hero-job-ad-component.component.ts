import { Component, Input, OnInit } from '@angular/core';

import { AdComponent } from '../ad-component';

@Component({
  selector: 'app-hero-job-ad-component',
//  templateUrl: './hero-job-ad-component.component.html',
//  styleUrls: ['./hero-job-ad-component.component.css']
template: 
`<div class="hero-profile">
  <h3>Featured Hero Profile</h3>
  <h4>{{data.name}}</h4>

  <p>{{data.bio}}</p>

  <strong>Hire this hero today!</strong>
</div>`

})
export class HeroJobAdComponentComponent implements AdComponent  {
  @Input() data: any;
  constructor() { 
    console.log('HeroJobAdComponentComponent')
  }

  ngOnInit(): void {
  }

}
