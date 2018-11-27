import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Property1Component } from './property1/property1.component';
import { Property2Component } from './property2/property2.component';
import { Property3Component } from './property3/property3.component';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: 'property1', component: Property1Component },
    { path: 'property2', component: Property2Component },
    { path: 'property3', component: Property3Component },
    { path: 'search', component: SearchComponent }]
  },
  {path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
