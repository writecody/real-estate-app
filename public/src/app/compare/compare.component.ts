import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  @Input() MainComponent: MainComponent;

    rent1: number = this.rent1;
    rent2: number = this.rent2;
    rent3: number = this.rent3;

    hypotheticalPrice1: number = this.hypotheticalPrice1;
    hypotheticalPrice2: number = this.hypotheticalPrice2;
    hypotheticalPrice3: number = this.hypotheticalPrice3;
    
    constructor() { }
    
    ngOnInit() {
    }
    
    
    calculateCompare() {
    }

}
