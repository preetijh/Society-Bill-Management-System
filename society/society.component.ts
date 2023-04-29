// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-society',
//   templateUrl: './society.component.html',
//   styleUrls: ['./society.component.css']
// })
// export class SocietyComponent {

// }
// import { Component } from '@angular/core';
// import { Bill } from '../bill.model';

// @Component({
//   selector: 'app-bill-form',
//   template: `
//     <form>
//       <label for="type">Type:</label>
//       <input type="text" id="type" name="type" [(ngModel)]="billData.type" required>

//       <label for="amount">Amount:</label>
//       <input type="number" id="amount" name="amount" [(ngModel)]="billData.amount" required>

//       <label for="date">Date:</label>
//       <input type="date" id="date" name="date" [(ngModel)]="billData.date" required>
//     </form>
//   `
// })
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bill } from '../bill.model';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {
  
  bills: Bill[] = [];
  billForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.billForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      type: ['', Validators.required],
      amount: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  addBill(bill: Bill): void {
    // this.bills.push(bill);
    bill.id = this.billForm.get('id')?.value;
    bill.name = this.billForm.get('name')?.value;
    bill.type = this.billForm.get('type')?.value;
    bill.amount = this.billForm.get('amount')?.value;
    bill.date = this.billForm.get('date')?.value;
    this.bills.push(bill);
    this.billForm.reset();
  }

  // editBill(editedBill: Bill): void {
  //   const index = this.bills.findIndex(bill => bill.id === editedBill.id);
  //   if (index >= 0) {
  //     this.bills[index] = editedBill;
  //   }
  //   console.log('Editing Bill:', editedBill);
  // }
  updateBill(updatedBill: Bill): void {
    const index = this.bills.findIndex(bill => bill.id === updatedBill.id);
    if (index !== -1) {
      if (updatedBill.name && updatedBill.amount && updatedBill.date) {
        this.bills[index] = updatedBill;
      } else {
        alert('Please fill in all fields');
      }
    }
  }
  

  
  
  deleteBill(bill: Bill): void {
    const index = this.bills.findIndex(b => b.id === bill.id);
  if (index >= 0) {
    this.bills.splice(index, 1);
  }
    console.log('Deleting Bill:', bill);
  }
 
  
  }
  
