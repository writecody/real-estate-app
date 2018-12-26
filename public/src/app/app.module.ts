import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Property1Component } from './property1/property1.component';
import { CompareComponent } from './compare/compare.component';
import { MainComponent } from './main/main.component';

import { CallerService } from './caller.service';

@NgModule({
  declarations: [
    AppComponent,
    Property1Component,
    CompareComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    CallerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
