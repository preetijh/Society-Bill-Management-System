// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-bill-form',
//   templateUrl: './bill-form.component.html',
//   styleUrls: ['./bill-form.component.css']
// })
// export class BillFormComponent {

// }
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Bill } from '../bill.model';

@Component({
  selector: 'app-bill-form',
  templateUrl: './bill-form.component.html',
  styleUrls: ['./bill-form.component.css']
})
export class BillFormComponent {
  @Input() billForm: FormGroup = new FormGroup({});
  @Output() submitForm = new EventEmitter<Bill>();

  onSubmit(): void {
    this.submitForm.emit(this.billForm.value);
    this.billForm.reset();
  }
}
