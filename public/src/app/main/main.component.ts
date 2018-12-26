import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Output, EventEmitter } from '@angular/core';
import { CallerService } from '../caller.service';

// ***********
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
  }

}