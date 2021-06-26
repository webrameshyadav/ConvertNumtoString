import { Injectable } from '@angular/core';
import { AdItem } from './ad-item';
import { HeroJobAdComponentComponent } from './hero-job-ad-component/hero-job-ad-component.component';
import { HeroProfileComponentComponent } from './hero-profile-component/hero-profile-component.component';

@Injectable({
  providedIn: 'root'
})
export class AdServiceService {

  constructor() { }

  getAds() {
    return [
      new AdItem(HeroJobAdComponentComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new AdItem(HeroJobAdComponentComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new AdItem(HeroProfileComponentComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),

      new AdItem(HeroProfileComponentComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
    ];
  }
}
