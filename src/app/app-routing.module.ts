import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AreaComponentComponent } from './projectComponents/area-component/area-component.component';
import { PakageComponentComponent } from './projectComponents/pakage-component/pakage-component.component';

const routes: Routes = [
  { path: '', component: PakageComponentComponent },
  { path: 'area', component: AreaComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
