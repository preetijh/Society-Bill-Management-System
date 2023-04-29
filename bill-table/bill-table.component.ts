// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { Bill } from '../bill.model';

// @Component({
//   selector: 'app-bill-table',
//   templateUrl: './bill-table.component.html',
//   styleUrls: ['./bill-table.component.css']
// })
// export class BillTableComponent {
//   @Input() bills: Bill[] = [];
//   @Output() editBill: EventEmitter<Bill> = new EventEmitter<Bill>();
//   @Output() deleteBill: EventEmitter<Bill> = new EventEmitter<Bill>();

//   // ...
// }
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Bill } from '../bill.model';

@Component({
  selector: 'app-bill-table',
  templateUrl: './bill-table.component.html',
  styleUrls: ['./bill-table.component.css']
})
export class BillTableComponent {
  @Input() bills: Bill[] = [];
  @Output() updateBill: EventEmitter<Bill> = new EventEmitter<Bill>();
  @Output() deleteBill: EventEmitter<Bill> = new EventEmitter<Bill>();

  onUpdateBill(bill: Bill): void {
    this.updateBill.emit(bill);
  }

  onDeleteBill(bill: Bill): void {
    this.deleteBill.emit(bill);
  }
}
