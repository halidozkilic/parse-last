import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dashboard1Component } from './dashboard1/dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2/dashboard2.component';

const routes: Routes = [
  { path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'dashboard1', component:Dashboard1Component},
  {path:'dashboard2', component:Dashboard2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
