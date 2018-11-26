import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Property1Component } from './property1/property1.component';
import { Property2Component } from './property2/property2.component';
import { SearchComponent } from './search/search.component';
import { CompareComponent } from './compare/compare.component';
import { Property3Component } from './property3/property3.component';

@NgModule({
  declarations: [
    AppComponent,
    Property1Component,
    Property2Component,
    SearchComponent,
    CompareComponent,
    Property3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
