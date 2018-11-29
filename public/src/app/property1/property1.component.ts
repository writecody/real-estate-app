import { Component, OnInit, Input } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-property1',
  templateUrl: './property1.component.html',
  styleUrls: ['./property1.component.css']
})
export class Property1Component implements OnInit {

  formAddress1: String = '';
  formCityStateZip1: String = '';

  @Input() MainComponent: MainComponent;

  constructor(
  ) { }

  ngOnInit() {
  }



}
