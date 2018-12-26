import { Component, OnInit, Input, Output, OnChanges, EventEmitter, Optional } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { formatNumber } from '@angular/common';
import { CallerService } from '../caller.service';
import { COMMON_DEPRECATED_I18N_PIPES } from '@angular/common/src/pipes/deprecated';

@Component({
  selector: 'app-property1',
  templateUrl: './property1.component.html',
  styleUrls: ['./property1.component.css'],
  providers: [CallerService]
})

export class Property1Component implements OnInit {

  constructor(private CallerService : CallerService) {}
  
  //Address Variables 1
  formAddress1: String = '';
  formCityStateZip1: String = '';
  property1: any;
  notes1: any;

  //Address Variables 2
  formAddress2: String = '';
  formCityStateZip2: String = '';
  property2: any;
  notes2: any;

  //Address Variables 3
  formAddress3: String = '';
  formCityStateZip3: String = '';
  property3: any;
  notes3: any;

  //PROPERTY 1 VARIABLE DECLARATIONS

  //Cost Assumptions Variables 1
  public purchasePrice1: number;
  public landValue1: number;
  public buildingValue1: number;
  public improvements1: number = 0;
  public closingCosts1: number = 0;
  public totalCost1: number;
  public rhp1: number; 

  //Revenue Assumptions Variables 1
  public rentM1: number;
  public vacancyLossRate1: number;
  
  //Financing Assumptions Variables 1
  public downPaymentPct1: number = 20;
  public downPaymentAmt1: number;
  public interestRate1: number = 5;
  public mortgageTerm1: number = 30;
  public financeAmt1: number;

  //Expense Assumptions Variables 1
  public taxRate1: number = 3;
  public insuranceM1: number = 100;
  public insuranceY1: number;
  public maintenanceM1: number = 50;
  public maintenanceY1: number;
  public utilitiesM1: number = 0;
  public utilitiesY1: number;
  public advertisingY1: number = 0;
  public adminY1: number = 0;
  public propertyMgmtPct1: number = 12;
  public propertyMgmtAmt1: number = 0;
  public monthlyInterestRate1: number;
  public adjMonthlyInterestRate1: number;
  public numberOfPayments1: number;
  public pvif1: number;
  public fvif1: number;
  public rvif1: number;
  
  //Revenues Variables 1
  public annualRentIncome1: number;
  public vacancyLossValueM1: number;
  public vacancyLossValueY1: number; 
  public grossIncomeM1: number;
  public grossIncomeY1: number;
  
  //Property Management Variables 1
  public totalExpenses1: number;
  public cashOutlay1: number;
  public mortgageCostM1: number;
  public mortgageCostY1: number;
  public locationRating1: number;

  //Cash Flow Variables 1
  public noi1: number; 
  public cashFlowM1: number;
  public cashFlowManagerY1: number; 
  public cashRoiManager1: number; 
  public propertyTaxesY1: number;
  public variableCostPropertyMgmt1: number;
  public fixedCostPropertyMgmtM1: number = 0;
  public fixedCostPropertyMgmtY1: number;
  public adminCosts1: number;
  public principalPaid1: number;
  public totalReturn1: number;
  public totalRoiManager1: number;
  public cashFlowOwnY1: number;
  public cashRoiOwn1: number;
  public totalRoiOwn1: number;

  //PROPERTY 2 VARIABLE DECLARATIONS

  //Cost Assumptions Variables 2
  public purchasePrice2: number;
  public landValue2: number;
  public buildingValue2: number;
  public improvements2: number;
  public closingCosts2: number;
  public totalCost2: number;
  public rhp2: number; 

  //Revenue Assumptions Variables 2
  public rentM2: number;
  public vacancyLossRate2: number;
  
  //Financing Assumptions Variables 2
  public downPaymentPct2: number;
  public downPaymentAmt2: number;
  public interestRate2: number;
  public mortgageTerm2: number = 30;
  public financeAmt2: number;

  //Expense Assumptions Variables 2
  public taxRate2: number = 3;
  public insuranceM2: number = 100;
  public insuranceY2: number;
  public maintenanceM2: number = 50;
  public maintenanceY2: number;
  public utilitiesM2: number = 0;
  public utilitiesY2: number;
  public advertisingY2: number = 0;
  public adminY2: number = 0;
  public propertyMgmtPct2: number = 12;
  public propertyMgmtAmt2: number = 0;
  public monthlyInterestRate2: number;
  public adjMonthlyInterestRate2: number;
  public numberOfPayments2: number;
  public pvif2: number;
  public fvif2: number;
  public rvif2: number;
  
  //Revenues Variables 2
  public annualRentIncome2: number;
  public vacancyLossValueM2: number;
  public vacancyLossValueY2: number; 
  public grossIncomeM2: number;
  public grossIncomeY2: number;
  
  //Property Management Variables 2
  public totalExpenses2: number;
  public cashOutlay2: number;
  public mortgageCostM2: number;
  public mortgageCostY2: number;
  public locationRating2: number;

  //Cash Flow Variables 2
  public noi2: number; 
  public cashFlowM2: number;
  public cashFlowManagerY2: number; 
  public cashRoiManager2: number; 
  public propertyTaxesY2: number;
  public variableCostPropertyMgmt2: number;
  public fixedCostPropertyMgmtM2: number = 0;
  public fixedCostPropertyMgmtY2: number;
  public adminCosts2: number;
  public principalPaid2: number;
  public totalReturn2: number;
  public totalRoiManager2: number;
  public cashFlowOwnY2: number;
  public cashRoiOwn2: number;
  public totalRoiOwn2: number;

  //PROPERTY 3 VARIABLE DECLARATIONS

  //Cost Assumptions Variables 3
  public purchasePrice3: number;
  public landValue3: number;
  public buildingValue3: number;
  public improvements3: number;
  public closingCosts3: number;
  public totalCost3: number;
  public rhp3: number; 

  //Revenue Assumptions Variables 3
  public rentM3: number;
  public vacancyLossRate3: number;
  
  //Financing Assumptions Variables 3
  public downPaymentPct3: number;
  public downPaymentAmt3: number;
  public interestRate3: number;
  public mortgageTerm3: number = 30;
  public financeAmt3: number;

  //Expense Assumptions Variables 3
  public taxRate3: number = 3;
  public insuranceM3: number = 100;
  public insuranceY3: number;
  public maintenanceM3: number = 50;
  public maintenanceY3: number;
  public utilitiesM3: number = 0;
  public utilitiesY3: number;
  public advertisingY3: number = 0;
  public adminY3: number = 0;
  public propertyMgmtPct3: number = 12;
  public propertyMgmtAmt3: number = 0;
  public monthlyInterestRate3: number;
  public adjMonthlyInterestRate3: number;
  public numberOfPayments3: number;
  public pvif3: number;
  public fvif3: number;
  public rvif3: number;
  
  //Revenues Variables 3
  public annualRentIncome3: number;
  public vacancyLossValueM3: number;
  public vacancyLossValueY3: number; 
  public grossIncomeM3: number;
  public grossIncomeY3: number;
  
  //Property Management Variables 3
  public totalExpenses3: number;
  public cashOutlay3: number;
  public mortgageCostM3: number;
  public mortgageCostY3: number;
  public locationRating3: number;

  //Cash Flow Variables 3
  public noi3: number; 
  public cashFlowM3: number;
  public cashFlowManagerY3: number; 
  public cashRoiManager3: number; 
  public propertyTaxesY3: number;
  public variableCostPropertyMgmt3: number;
  public fixedCostPropertyMgmtM3: number = 0;
  public fixedCostPropertyMgmtY3: number;
  public adminCosts3: number;
  public principalPaid3: number;
  public totalReturn3: number;
  public totalRoiManager3: number;
  public cashFlowOwnY3: number;
  public cashRoiOwn3: number;
  public totalRoiOwn3: number;
  
  formatNumber(num) {
    return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  
  //RUN CALCULATIONS FOR ALL THREE PROPERTIES
  compareAll() {
    this.calculate1();
    this.calculate2();
    this.calculate3();
  }

  //METHODS 1
  findTotalCost1() {
    this.landValue1 = (this.purchasePrice1 * .25);
    this.buildingValue1 = (this.purchasePrice1 * .75);
    this.totalCost1 = (this.purchasePrice1 + this.improvements1 + this.closingCosts1);
  }
  
  findMortgagePayment1() {
    let ir = (this.interestRate1 / 100);
    let nm = this.mortgageTerm1;
    this.monthlyInterestRate1 = (ir / 12);
    this.adjMonthlyInterestRate1 = (this.monthlyInterestRate1 + 1);
    this.numberOfPayments1 = (nm * 12);
    this.pvif1 = Math.pow(this.adjMonthlyInterestRate1, -this.numberOfPayments1);
    this.fvif1 = (1 - this.pvif1); 
    this.rvif1 = (this.monthlyInterestRate1 / this.fvif1);
    this.downPaymentAmt1 = (this.purchasePrice1 * (this.downPaymentPct1 / 100));
    this.financeAmt1 = (this.purchasePrice1 - this.downPaymentAmt1);
    this.mortgageCostM1 = ((this.rvif1) * (this.purchasePrice1 - ((this.purchasePrice1 * this.downPaymentPct1) / 100)));
  }
    
  findCashOutlay1() {
    this.cashOutlay1 = (((this.purchasePrice1 * this.downPaymentPct1) / 100) + this.improvements1 + this.closingCosts1);
  }
  
  findManagerHiredCosts1() {
    this.annualRentIncome1 = (this.rentM1 * 12);
    this.mortgageCostY1 = (this.mortgageCostM1 * 12);
    this.vacancyLossValueM1 = -(this.rentM1 * (this.vacancyLossRate1 / 100));
    this.vacancyLossValueY1 = -(this.annualRentIncome1 * (this.vacancyLossRate1 / 100));
  
    this.grossIncomeM1 = (this.rentM1 + this.vacancyLossValueM1);
    this.grossIncomeY1 = (this.annualRentIncome1 + this.vacancyLossValueY1);
    this.cashFlowM1 = (this.noi1 - this.mortgageCostM1);
    this.fixedCostPropertyMgmtY1 = (this.fixedCostPropertyMgmtM1 * 12);
    this.variableCostPropertyMgmt1 = ((this.propertyMgmtPct1 / 100) * this.grossIncomeY1);
  }
  
  findAdminCosts1() {
    this.propertyTaxesY1 = (this.purchasePrice1 * (this.taxRate1 / 100));
    this.utilitiesY1 = (this.utilitiesM1 * 12);
    this.maintenanceY1 = (this.maintenanceM1 * 12);
    this.insuranceY1 = (this.insuranceM1 * 12);
    this.adminCosts1 = (this.propertyTaxesY1 + this.insuranceY1 + this.maintenanceY1 + this.utilitiesY1 + this.advertisingY1 + this.adminY1);
  }
  
  cumprinc1() {
    let i = (this.interestRate1 / 100);//interest rate converted to percentage
    let n = (this.mortgageTerm1 * 12);//total number of payments over life of loan
    let p = this.financeAmt1;
    let b = 1; //payment month start per year
    let e = 12; //payment month end per year
    let q = 12; //payments per year
    let m = this.mortgageCostM1;
    this.principalPaid1 = (((p-m*q/i)*(1+(i/q))**(e)+m*q/i)-((p-m*q/i)*(1+(i/q))**(b-1)+m*q/i)) * -1;
    console.log('CUMPRINC result: ', this.principalPaid1);
    console.log('CUMPRINC is type of: ', typeof(this.principalPaid1));
  }

  calculate1() {
    this.findMortgagePayment1();
    this.findTotalCost1();
    this.findAdminCosts1();
    this.findCashOutlay1();
    this.findManagerHiredCosts1();
    this.cumprinc1();
    this.totalExpenses1 = (this.adminCosts1 + this.variableCostPropertyMgmt1); 
    this.noi1 = (this.grossIncomeY1 - this.totalExpenses1);
    this.cashFlowManagerY1 = (this.noi1 - this.mortgageCostY1);
    this.cashRoiManager1 = (this.cashFlowManagerY1 / this.cashOutlay1);
    this.rhp1 = ((this.rentM1 / this.purchasePrice1) * 100);
    this.totalReturn1 = (this.cashFlowManagerY1 + this.principalPaid1);
    this.totalRoiManager1 = (this.totalReturn1 / this.cashOutlay1);
    this.cashFlowOwnY1 = (this.cashFlowManagerY1) + ((this.propertyMgmtPct1 / 100) *      this.grossIncomeY1) + (this.fixedCostPropertyMgmtY1);
    this.cashRoiOwn1 = (this.cashFlowOwnY1 / this.cashOutlay1);
    this.totalRoiOwn1 = ((this.totalReturn1 + this.variableCostPropertyMgmt1 + this.fixedCostPropertyMgmtY1) / this.cashOutlay1);
  }

  @Input() MainComponent: MainComponent;
  
  ngOnInit() {
  }
  
  //CALL ZILLOW API 1
  search1() {
    let xhttp = new XMLHttpRequest();    
    xhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200 ) {
        let data = xhttp.responseText;
        console.log('returned xml data: ', data);
        
        //PARSE XML 1
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(data, "text/xml");
        
        //CURRENCY FORMATTER 1
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2,
        })
        
        //ADDRESS 1
        document.getElementsByClassName("address1")[0].innerHTML =  
        xmlDoc.getElementsByTagName("address")[0].childNodes[0].nodeValue;

        document.getElementsByClassName("address1")[1].innerHTML =  
        xmlDoc.getElementsByTagName("address")[0].childNodes[0].nodeValue;
        
        document.getElementById("citystatezip1").innerText = 
        xmlDoc.getElementsByTagName("citystatezip")[0].childNodes[0].nodeValue;
        
        document.getElementById("zipcode1").innerText = 
        xmlDoc.getElementsByTagName("zipcode")[0].childNodes[0].nodeValue;
        
        //PROPERTY SPECS 1
        document.getElementsByClassName("yearBuilt1")[0].innerHTML = 
        xmlDoc.getElementsByTagName("yearBuilt")[0].childNodes[0].nodeValue;
        
        document.getElementsByClassName("listedPrice1")[0].innerHTML = 
        xmlDoc.getElementsByTagName("amount")[0].childNodes[0].nodeValue;

        document.getElementsByClassName("listedPrice1")[1].innerHTML = 
        xmlDoc.getElementsByTagName("amount")[0].childNodes[0].nodeValue;

        document.getElementsByClassName("bedrooms1")[0].innerHTML = 
        xmlDoc.getElementsByTagName("bedrooms")[0].childNodes[0].nodeValue;

        document.getElementsByClassName("bedrooms1")[1].innerHTML = 
        xmlDoc.getElementsByTagName("bedrooms")[0].childNodes[0].nodeValue;
        
        document.getElementsByClassName("bathrooms1")[0].innerHTML = 
        xmlDoc.getElementsByTagName("bathrooms")[0].childNodes[0].nodeValue;

        document.getElementsByClassName("bathrooms1")[1].innerHTML = 
        xmlDoc.getElementsByTagName("bathrooms")[0].childNodes[0].nodeValue;
        
        document.getElementsByClassName("finishedSqFt1")[0].innerHTML = 
        xmlDoc.getElementsByTagName("finishedSqFt")[0].childNodes[0].nodeValue;

        document.getElementsByClassName("finishedSqFt1")[1].innerHTML = 
        xmlDoc.getElementsByTagName("finishedSqFt")[0].childNodes[0].nodeValue;
        
        document.getElementsByClassName("lotSizeSqFt1")[0].innerHTML = 
        xmlDoc.getElementsByTagName("lotSizeSqFt")[0].childNodes[0].nodeValue;      
      }
    }
    
    xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/https://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz1gf3b9rt9mz_4ixyf&address=' + this.formAddress1 + '&citystatezip=' + this.formCityStateZip1, true);
    xhttp.send();
  }
  
  //METHODS 2
  findTotalCost2() {
    this.landValue2 = (this.purchasePrice2 * .25);
    this.buildingValue2 = (this.purchasePrice2 * .75);
    this.totalCost2 = (this.purchasePrice2 + this.improvements2 + this.closingCosts2);
  }
  
  findMortgagePayment2() {
    let ir = (this.interestRate2 / 100);
    let nm = this.mortgageTerm2;
    this.monthlyInterestRate2 = (ir / 12);
    this.adjMonthlyInterestRate2 = (this.monthlyInterestRate2 + 1);
    this.numberOfPayments2 = (nm * 12);
    this.pvif2 = Math.pow(this.adjMonthlyInterestRate2, -this.numberOfPayments2);
    this.fvif2 = (1 - this.pvif2); 
    this.rvif2 = (this.monthlyInterestRate2 / this.fvif2);
    this.downPaymentAmt2 = (this.purchasePrice2 * (this.downPaymentPct2 / 100));
    this.financeAmt2 = (this.purchasePrice2 - this.downPaymentAmt2);
    this.mortgageCostM2 = ((this.rvif2) * (this.purchasePrice2 - ((this.purchasePrice2 * this.downPaymentPct2) / 100)));
  }
    
  findCashOutlay2() {
    this.cashOutlay2 = (((this.purchasePrice2 * this.downPaymentPct2) / 100) + this.improvements2 + this.closingCosts2);
  }
  
  findManagerHiredCosts2() {
    this.annualRentIncome2 = (this.rentM2 * 12);
    this.mortgageCostY2 = (this.mortgageCostM2 * 12);
    this.vacancyLossValueM2 = -(this.rentM2 * (this.vacancyLossRate2 / 100));
    this.vacancyLossValueY2 = -(this.annualRentIncome2 * (this.vacancyLossRate2 / 100));
  
    this.grossIncomeM2 = (this.rentM2 + this.vacancyLossValueM2);
    this.grossIncomeY2 = (this.annualRentIncome2 + this.vacancyLossValueY2);
    this.cashFlowM2 = (this.noi2 - this.mortgageCostM2);
    this.fixedCostPropertyMgmtY2 = (this.fixedCostPropertyMgmtM2 * 12);
    this.variableCostPropertyMgmt2 = ((this.propertyMgmtPct2 / 100) * this.grossIncomeY2);
  }
  
  findAdminCosts2() {
    this.propertyTaxesY2 = (this.purchasePrice2 * (this.taxRate2 / 100));
    this.utilitiesY2 = (this.utilitiesM2 * 12);
    this.maintenanceY2 = (this.maintenanceM2 * 12);
    this.insuranceY2 = (this.insuranceM2 * 12);
    this.adminCosts2 = (this.propertyTaxesY2 + this.insuranceY2 + this.maintenanceY2 + this.utilitiesY2 + this.advertisingY2 + this.adminY2);
  }
  
  cumprinc2() {
    let i = (this.interestRate2 / 100);//interest rate converted to percentage
    let n = (this.mortgageTerm2 * 12);//total number of payments over life of loan
    let p = this.financeAmt2;
    let b = 1; //payment month start per year
    let e = 12; //payment month end per year
    let q = 12; //payments per year
    let m = this.mortgageCostM2;
    this.principalPaid2 = (((p-m*q/i)*(1+(i/q))**(e)+m*q/i)-((p-m*q/i)*(1+(i/q))**(b-1)+m*q/i)) * -1;
    console.log('CUMPRINC result: ', this.principalPaid2);
    console.log('CUMPRINC is type of: ', typeof(this.principalPaid2));
  }

  calculate2() {
    this.findMortgagePayment2();
    this.findTotalCost2();
    this.findAdminCosts2();
    this.findCashOutlay2();
    this.findManagerHiredCosts2();
    this.cumprinc2();
    this.totalExpenses2 = (this.adminCosts2 + this.variableCostPropertyMgmt2); 
    this.noi2 = (this.grossIncomeY2 - this.totalExpenses2);
    this.cashFlowManagerY2 = (this.noi2 - this.mortgageCostY2);
    this.cashRoiManager2 = (this.cashFlowManagerY2 / this.cashOutlay2);
    this.rhp2 = ((this.rentM2 / this.purchasePrice2) * 100);
    this.totalReturn2 = (this.cashFlowManagerY2 + this.principalPaid2);
    this.totalRoiManager2 = (this.totalReturn2 / this.cashOutlay2);
    this.cashFlowOwnY2 = (this.cashFlowManagerY2) + ((this.propertyMgmtPct2 / 100) *      this.grossIncomeY2) + (this.fixedCostPropertyMgmtY2);
    this.cashRoiOwn2 = (this.cashFlowOwnY2 / this.cashOutlay2);
    this.totalRoiOwn2 = ((this.totalReturn2 + this.variableCostPropertyMgmt2 + this.fixedCostPropertyMgmtY2) / this.cashOutlay2);
  }

  //CALL ZILLOW API 2
  search2() {
    let xhttp = new XMLHttpRequest();    
    xhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200 ) {
        let data = xhttp.responseText;
        console.log('returned xml data: ', data);
        
        //PARSE XML 2
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(data, "text/xml");
        
        //CURRENCY FORMATTER 2
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2,
        })
        
        //ADDRESS 2
        document.getElementsByClassName("address2")[0].innerHTML =  
        xmlDoc.getElementsByTagName("address")[0].childNodes[0].nodeValue;

        document.getElementsByClassName("address2")[1].innerHTML =  
        xmlDoc.getElementsByTagName("address")[0].childNodes[0].nodeValue;
        
        document.getElementById("citystatezip2").innerText = 
        xmlDoc.getElementsByTagName("citystatezip")[0].childNodes[0].nodeValue;
        
        document.getElementById("zipcode2").innerText = 
        xmlDoc.getElementsByTagName("zipcode")[0].childNodes[0].nodeValue;
        
        // //PROPERTY SPECS
        document.getElementsByClassName("yearBuilt2")[0].innerHTML = 
        xmlDoc.getElementsByTagName("yearBuilt")[0].childNodes[0].nodeValue;
        
        document.getElementsByClassName("listedPrice2")[0].innerHTML = 
        xmlDoc.getElementsByTagName("amount")[0].childNodes[0].nodeValue;

        document.getElementsByClassName("listedPrice2")[1].innerHTML = 
        xmlDoc.getElementsByTagName("amount")[0].childNodes[0].nodeValue;

        document.getElementsByClassName("bedrooms2")[0].innerHTML = 
        xmlDoc.getElementsByTagName("bedrooms")[0].childNodes[0].nodeValue;

        document.getElementsByClassName("bedrooms2")[1].innerHTML = 
        xmlDoc.getElementsByTagName("bedrooms")[0].childNodes[0].nodeValue;
        
        document.getElementsByClassName("bathrooms2")[0].innerHTML = 
        xmlDoc.getElementsByTagName("bathrooms")[0].childNodes[0].nodeValue;

        document.getElementsByClassName("bathrooms2")[1].innerHTML = 
        xmlDoc.getElementsByTagName("bathrooms")[0].childNodes[0].nodeValue;
        
        document.getElementsByClassName("finishedSqFt2")[0].innerHTML = 
        xmlDoc.getElementsByTagName("finishedSqFt")[0].childNodes[0].nodeValue;

        document.getElementsByClassName("finishedSqFt2")[1].innerHTML = 
        xmlDoc.getElementsByTagName("finishedSqFt")[0].childNodes[0].nodeValue;
        
        document.getElementById("lotSizeSqFt2").innerText = 
        xmlDoc.getElementsByTagName("lotSizeSqFt")[0].childNodes[0].nodeValue;      
      }
    }
    
    xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/https://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz1gf3b9rt9mz_4ixyf&address=' + this.formAddress2 + '&citystatezip=' + this.formCityStateZip2, true);
    xhttp.send();
  }

  //METHODS 3
  findTotalCost3() {
    this.landValue3 = (this.purchasePrice3 * .25);
    this.buildingValue3 = (this.purchasePrice3 * .75);
    this.totalCost3 = (this.purchasePrice3 + this.improvements3 + this.closingCosts3);
  }
  
  findMortgagePayment3() {
    let ir = (this.interestRate3 / 100);
    let nm = this.mortgageTerm3;
    this.monthlyInterestRate3 = (ir / 12);
    this.adjMonthlyInterestRate3 = (this.monthlyInterestRate3 + 1);
    this.numberOfPayments3 = (nm * 12);
    this.pvif3 = Math.pow(this.adjMonthlyInterestRate3, -this.numberOfPayments3);
    this.fvif3 = (1 - this.pvif3); 
    this.rvif3 = (this.monthlyInterestRate3 / this.fvif3);
    this.downPaymentAmt3 = (this.purchasePrice3 * (this.downPaymentPct3 / 100));
    this.financeAmt3 = (this.purchasePrice3 - this.downPaymentAmt3);
    this.mortgageCostM3 = ((this.rvif3) * (this.purchasePrice3 - ((this.purchasePrice3 * this.downPaymentPct3) / 100)));
  }
    
  findCashOutlay3() {
    this.cashOutlay3 = (((this.purchasePrice3 * this.downPaymentPct3) / 100) + this.improvements3 + this.closingCosts3);
  }
  
  findManagerHiredCosts3() {
    this.annualRentIncome3 = (this.rentM2 * 12);
    this.mortgageCostY3 = (this.mortgageCostM3 * 12);
    this.vacancyLossValueM3 = -(this.rentM3 * (this.vacancyLossRate3 / 100));
    this.vacancyLossValueY3 = -(this.annualRentIncome3 * (this.vacancyLossRate3 / 100));
  
    this.grossIncomeM3 = (this.rentM3 + this.vacancyLossValueM3);
    this.grossIncomeY3 = (this.annualRentIncome3 + this.vacancyLossValueY3);
    this.cashFlowM3 = (this.noi3 - this.mortgageCostM3);
    this.fixedCostPropertyMgmtY3 = (this.fixedCostPropertyMgmtM3 * 12);
    this.variableCostPropertyMgmt3 = ((this.propertyMgmtPct3 / 100) * this.grossIncomeY3);
  }
  
  findAdminCosts3() {
    this.propertyTaxesY3 = (this.purchasePrice3 * (this.taxRate3 / 100));
    this.utilitiesY3 = (this.utilitiesM3 * 12);
    this.maintenanceY3 = (this.maintenanceM3 * 12);
    this.insuranceY3 = (this.insuranceM3 * 12);
    this.adminCosts3 = (this.propertyTaxesY3 + this.insuranceY3 + this.maintenanceY3 + this.utilitiesY3 + this.advertisingY3 + this.adminY3);
  }
  
  cumprinc3() {
    let i = (this.interestRate3 / 100);//interest rate converted to percentage
    let n = (this.mortgageTerm3 * 12);//total number of payments over life of loan
    let p = this.financeAmt3;
    let b = 1; //payment month start per year
    let e = 12; //payment month end per year
    let q = 12; //payments per year
    let m = this.mortgageCostM3;
    this.principalPaid3 = (((p-m*q/i)*(1+(i/q))**(e)+m*q/i)-((p-m*q/i)*(1+(i/q))**(b-1)+m*q/i)) * -1;
    console.log('CUMPRINC result: ', this.principalPaid3);
    console.log('CUMPRINC is type of: ', typeof(this.principalPaid3));
  }

  calculate3() {
    this.findMortgagePayment3();
    this.findTotalCost3();
    this.findAdminCosts3();
    this.findCashOutlay3();
    this.findManagerHiredCosts3();
    this.cumprinc3();
    this.totalExpenses3 = (this.adminCosts3 + this.variableCostPropertyMgmt3); 
    this.noi3 = (this.grossIncomeY3 - this.totalExpenses3);
    this.cashFlowManagerY3 = (this.noi3 - this.mortgageCostY3);
    this.cashRoiManager3 = (this.cashFlowManagerY3 / this.cashOutlay3);
    this.rhp3 = ((this.rentM3 / this.purchasePrice3) * 100);
    this.totalReturn3 = (this.cashFlowManagerY3 + this.principalPaid3);
    this.totalRoiManager3 = (this.totalReturn3 / this.cashOutlay3);
    this.cashFlowOwnY3 = (this.cashFlowManagerY3) + ((this.propertyMgmtPct3 / 100) * this.grossIncomeY3) + (this.fixedCostPropertyMgmtY3);
    this.cashRoiOwn3 = (this.cashFlowOwnY3 / this.cashOutlay3);
    this.totalRoiOwn3 = ((this.totalReturn3 + this.variableCostPropertyMgmt3 + this.fixedCostPropertyMgmtY3) / this.cashOutlay3);
  }

  //CALL ZILLOW API 3
  search3() {
    let xhttp = new XMLHttpRequest();    
    xhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200 ) {
        let data = xhttp.responseText;
        console.log('returned xml data: ', data);
        
        //PARSE XML 3
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(data, "text/xml");
        
        //CURRENCY FORMATTER 3
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2,
        })
        
        //ADDRESS 3
        document.getElementsByClassName("address3")[0].innerHTML =  
        xmlDoc.getElementsByTagName("address")[0].childNodes[0].nodeValue;

        document.getElementsByClassName("address3")[1].innerHTML =  
        xmlDoc.getElementsByTagName("address")[0].childNodes[0].nodeValue;
        
        document.getElementById("citystatezip3").innerText = 
        xmlDoc.getElementsByTagName("citystatezip")[0].childNodes[0].nodeValue;
        
        document.getElementById("zipcode3").innerText = 
        xmlDoc.getElementsByTagName("zipcode")[0].childNodes[0].nodeValue;
        
        // //PROPERTY SPECS
        document.getElementsByClassName("yearBuilt3")[0].innerHTML = 
        xmlDoc.getElementsByTagName("yearBuilt")[0].childNodes[0].nodeValue;
        
        document.getElementsByClassName("listedPrice3")[0].innerHTML = 
        xmlDoc.getElementsByTagName("amount")[0].childNodes[0].nodeValue;

        document.getElementsByClassName("listedPrice3")[1].innerHTML = 
        xmlDoc.getElementsByTagName("amount")[0].childNodes[0].nodeValue;

        document.getElementsByClassName("bedrooms3")[0].innerHTML = 
        xmlDoc.getElementsByTagName("bedrooms")[0].childNodes[0].nodeValue;

        document.getElementsByClassName("bedrooms3")[1].innerHTML = 
        xmlDoc.getElementsByTagName("bedrooms")[0].childNodes[0].nodeValue;
        
        document.getElementsByClassName("bathrooms3")[0].innerHTML = 
        xmlDoc.getElementsByTagName("bathrooms")[0].childNodes[0].nodeValue;

        document.getElementsByClassName("bathrooms3")[1].innerHTML = 
        xmlDoc.getElementsByTagName("bathrooms")[0].childNodes[0].nodeValue;
        
        document.getElementsByClassName("finishedSqFt3")[0].innerHTML = 
        xmlDoc.getElementsByTagName("finishedSqFt")[0].childNodes[0].nodeValue;

        document.getElementsByClassName("finishedSqFt3")[1].innerHTML = 
        xmlDoc.getElementsByTagName("finishedSqFt")[0].childNodes[0].nodeValue;
        
        document.getElementById("lotSizeSqFt3").innerText = 
        xmlDoc.getElementsByTagName("lotSizeSqFt")[0].childNodes[0].nodeValue;      
      }
    }
    
    xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/https://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz1gf3b9rt9mz_4ixyf&address=' + this.formAddress3 + '&citystatezip=' + this.formCityStateZip3, true);
    xhttp.send();
  }

}

