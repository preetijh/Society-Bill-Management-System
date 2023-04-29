export class Bill {
    id: number;
    name:string;
    type: string;
    amount: number;
    date: Date;
  
    constructor() {
      this.id = 0;
      this.name='';
      this.type = '';
      this.amount = 0;
      this.date = new Date();
    }
  }
  