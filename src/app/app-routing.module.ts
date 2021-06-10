import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionComponent } from './conversion/components/conversion.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
  { path: 'first-component', component:  ConversionComponent},
  { path: '**', component: NotFoundComponent }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
