import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Property1Component } from './property1/property1.component';
import { Property2Component } from './property2/property2.component';
import { Property3Component } from './property3/property3.component';
import { SearchComponent } from './search/search.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
