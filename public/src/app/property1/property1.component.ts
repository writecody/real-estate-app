import { Component, OnInit, Input } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  providers: [MainComponent],
  selector: 'app-property1',
  templateUrl: './property1.component.html',
  styleUrls: ['./property1.component.css']
})
export class Property1Component implements OnInit {
  @Input() MainComponent: MainComponent;

  constructor(
   private _parent: MainComponent 
  ) { }

  ngOnInit() {
  }



}
