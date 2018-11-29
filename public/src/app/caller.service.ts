import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class CallerService {

  constructor(
    private http: HttpClient, 
    ) {
}

  formAddress1: String = '';
  formCityStateZip1: String = '';

  printToConsole(arg) {
    console.log(arg);
  }
 
  
}
