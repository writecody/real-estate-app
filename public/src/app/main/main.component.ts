import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  formAddress: String = '';
  formCityStateZip: String = '';

  constructor(private http: HttpClient) {
    
  }
  
  ngOnInit() {
  }
  
  search1() {
    let xhttp = new XMLHttpRequest();    
    xhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200 ) {
        let data = xhttp.responseText;
        console.log('returned xml data: ', data);
        
        //PARSE XML
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(data, "text/xml");
        
        //CURRENCY FORMATTER
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
        })

        //ADDRESS
        document.getElementById("address1").innerText = 
        xmlDoc.getElementsByTagName("address")[0].childNodes[0].nodeValue;

        document.getElementById("citystatezip1").innerText = 
        xmlDoc.getElementsByTagName("citystatezip")[0].childNodes[0].nodeValue;

        document.getElementById("zipcode1").innerText = 
        xmlDoc.getElementsByTagName("zipcode")[0].childNodes[0].nodeValue;

        //PROPERTY SPECS
        document.getElementById("bedrooms1").innerText = 
        xmlDoc.getElementsByTagName("bedrooms")[0].childNodes[0].nodeValue;

        document.getElementById("bathrooms1").innerText = 
        xmlDoc.getElementsByTagName("bathrooms")[0].childNodes[0].nodeValue;

        document.getElementById("finishedSqFt1").innerText = 
        xmlDoc.getElementsByTagName("finishedSqFt")[0].childNodes[0].nodeValue;
        
        document.getElementById("lotSizeSqFt1").innerText = 
        xmlDoc.getElementsByTagName("lotSizeSqFt")[0].childNodes[0].nodeValue;
        
        document.getElementById("yearBuilt1").innerText = 
        xmlDoc.getElementsByTagName("yearBuilt")[0].childNodes[0].nodeValue;

        //MORTGAGE
        var amount1 = xmlDoc.getElementsByTagName("amount")[0].childNodes[0].nodeValue;
        var amountFormatted1 = formatter.format((parseInt(amount1)));
        document.getElementById("amount1").innerText = amountFormatted1.toString();
        
        var downPayment1 = formatter.format((parseInt(amount1)*.20));
        document.getElementById("down-payment1").innerHTML = downPayment1.toString();

        var insuranceM1 = formatter.format(100);
        document.getElementById("insurance-M1").innerHTML = insuranceM1;

        var maintenanceM1 = formatter.format(100);
        document.getElementById("maintenance-M1").innerHTML = maintenanceM1;

        var utilities1 = formatter.format(0);
        document.getElementById("utilities1").innerHTML = utilities1;

        var advertising1 = formatter.format(0);
        document.getElementById("advertising1").innerHTML = advertising1;

        var adminY1 = formatter.format(0);
        document.getElementById("admin-Y1").innerHTML = adminY1;

        var propertyMgmt1 = formatter.format(0);
        document.getElementById("property-mgmt1").innerHTML = propertyMgmt1;

        var propertyMgmtPct1 = ('12%');
        document.getElementById("property-mgmt-pct1").innerHTML = propertyMgmtPct1;
      }
    }
    
    xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/https://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz1gf3b9rt9mz_4ixyf&address=' + this.formAddress + '&citystatezip=' + this.formCityStateZip, true);
    xhttp.send();
    
  }
  
}