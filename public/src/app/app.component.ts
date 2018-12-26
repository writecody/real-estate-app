import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { stringify } from '@angular/core/src/util';
import { FormsModule } from '@angular/forms';
import { SelectorMatcher } from '@angular/compiler';
import { CallerService } from './caller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  formAddress: String = '';
  formCityStateZip: String = '';
  records: any;

  constructor(private myFirstService : CallerService) {
  }
  
  ngOnInit() {
  }
  
}
