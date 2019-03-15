import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Property1Component } from './property1/property1.component';

import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { CompareComponent } from './compare/compare.component';


const routes: Routes = [
  { path: '', component: Property1Component },
  { path: '', pathMatch: 'full', redirectTo: '/compare' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
