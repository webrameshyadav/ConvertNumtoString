import { Component, Input, OnInit } from '@angular/core';

import { AdComponent } from '../ad-component';

@Component({
  selector: 'app-hero-job-ad-component',
 templateUrl: './hero-job-ad-component.component.html',
styleUrls: ['./hero-job-ad-component.component.css']


})
export class HeroJobAdComponentComponent implements AdComponent  {
  @Input() data: any;
  constructor() { 
    console.log('HeroJobAdComponentComponent')
  }

  ngOnInit(): void {
  }

}
