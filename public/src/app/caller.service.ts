import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallerService {

  printToConsole(arg) {
    console.log(arg);
  }
 
}
