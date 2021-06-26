import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ConversionComponent  } from './conversion/components/conversion.component';
import * as conversionReducer from './conversion/store/conversion.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MygridComponent } from './mygrid/mygrid.component';
import { AgGridModule } from 'ag-grid-angular';
import { DynamicCompComponent } from './dynamic-comp/dynamic-comp.component';
import { HeroJobAdComponentComponent } from './dynamic-comp/hero-job-ad-component/hero-job-ad-component.component';
import { HeroProfileComponentComponent } from './dynamic-comp/hero-profile-component/hero-profile-component.component';
import { AdBannerComponent } from './dynamic-comp/ad-banner.component';
import { AdDirectiveDirective } from './dynamic-comp/ad-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    ConversionComponent,
    NavComponent,
    NotFoundComponent,
    MygridComponent,
    DynamicCompComponent,
    HeroJobAdComponentComponent,
    HeroProfileComponentComponent,
    AdBannerComponent,
    AdDirectiveDirective
  ],
  entryComponents: [ HeroJobAdComponentComponent, HeroProfileComponentComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    StoreModule.forRoot({conversionStore: conversionReducer.reducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
