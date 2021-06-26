import { Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdComponent } from './ad-component';
import { AdDirectiveDirective } from './ad-directive.directive';
import { AdItem } from './ad-item';

@Component({
  selector: 'app-ad-banner',
  template: `<div class="ad-banner-example">
    <h3>Advertisements</h3>
    <ng-template adHost></ng-template>
  </div>`
})
export class AdBannerComponent implements OnInit, OnDestroy {

  @Input() ads: AdItem[] = [];
  currentAdIndex = -1;
  @ViewChild(AdDirectiveDirective, { static: true }) adHost!: AdDirectiveDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    if (this.adHost != undefined) {
      const viewContainerRef = this.adHost.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent<AdComponent>(componentFactory);
      componentRef.instance.data = adItem.data;
    }
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
