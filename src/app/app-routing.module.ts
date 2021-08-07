import { MyparentComponent } from './parentchild/myparent/myparent.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionComponent } from './conversion/components/conversion.component';
import { DynamicCompComponent } from './dynamic-comp/dynamic-comp.component';
import { HomeComponent } from './home/home.component';
import { MyMaterialComponent } from './my-material/my-material.component';
import { MygridComponent } from './mygrid/mygrid.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
  { path: 'first-component', component:  ConversionComponent},
  { path: 'mygrid', component:  MygridComponent},
  { path: 'Dynamic', component:  DynamicCompComponent },
  { path: 'Home', component:  HomeComponent },
  { path: 'Material', component:  MyMaterialComponent },
  { path: 'PC', component:  MyparentComponent },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
