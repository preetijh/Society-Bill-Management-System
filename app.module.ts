// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { CalculatorComponent } from './calculator/calculator.component';
// import { FormsModule } from '@angular/forms';
// import { Prac13Component } from './prac13/prac13.component';
// import { Prac14Component } from './prac14/prac14.component';
// import { Prac12Component } from './prac12/prac12.component';
// import { Prac15Component } from './prac15/prac15.component';
// // import { SocietyComponent } from './society/society.component';
// // import { BillTableComponent } from './bill-table/bill-table.component';
// // import { BillFormComponent } from './bill-form/bill-form.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     CalculatorComponent,
//     Prac13Component,
//     Prac14Component,
//     Prac12Component,
//     Prac15Component,
//     // SocietyComponent,
//     // BillTableComponent,
//     // BillFormComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent,Prac13Component]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SocietyComponent } from './society/society.component';
import { BillTableComponent } from './bill-table/bill-table.component';
import { BillFormComponent } from './bill-form/bill-form.component';
import { RouterModule } from '@angular/router';
import { Prac16Component } from './prac16/prac16.component';



@NgModule({
  declarations: [
    AppComponent,
    SocietyComponent,
    BillTableComponent,
    BillFormComponent,
    Prac16Component
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



