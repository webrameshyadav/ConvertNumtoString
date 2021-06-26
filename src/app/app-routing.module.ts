import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionComponent } from './conversion/components/conversion.component';
import { DynamicCompComponent } from './dynamic-comp/dynamic-comp.component';
import { MygridComponent } from './mygrid/mygrid.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
  { path: 'first-component', component:  ConversionComponent},
  { path: 'mygrid', component:  MygridComponent},
  { path: 'Dynamic', component:  DynamicCompComponent },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
