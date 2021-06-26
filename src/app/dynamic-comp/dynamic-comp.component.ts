import { Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdItem } from './ad-item';
import { AdServiceService } from './ad-service.service';

@Component({
  selector: 'app-dynamic-comp',
 template :`<div>
 <app-ad-banner [ads]="ads"></app-ad-banner>
</div>`
})
export class DynamicCompComponent implements OnInit {

  ads: AdItem[] = [];

  constructor(private adService: AdServiceService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

 
}
