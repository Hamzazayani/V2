import { Component, Inject, Optional } from '@angular/core';
import { InvoiceItem } from '../invoiceItem';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  items: InvoiceItem[] = [
    { articleName: 'Article 1', cost: 100, tva: 10, promotion: 5, initialPayment: 0, finalPayment: 0 },
    { articleName: 'Article 2', cost: 200, tva: 15, promotion: 10, initialPayment: 0, finalPayment: 0 },
    { articleName: 'Article 3', cost: 150, tva: 20, promotion: 0, initialPayment: 0, finalPayment: 0 }
  ];

  constructor(private router:Router,@Optional()@Inject(MAT_DIALOG_DATA) public data: any) {
    this.calculatePayments();
  }

  calculatePayments(): void {
    this.items.forEach(item => {
      item.initialPayment = item.cost;
      const taxAmount = item.cost * (item.tva / 100);
      const discountAmount = item.cost * (item.promotion / 100);
      item.finalPayment = item.cost + taxAmount - discountAmount;
    });
  }

  get totalInitialPayment(): number {
    return this.items.reduce((sum, item) => sum + item.initialPayment, 0);
  }

  get totalFinalPayment(): number {
    return this.items.reduce((sum, item) => sum + item.finalPayment, 0);
  }
  generatePdf(){
    var data = document.getElementById('invoice');
    const pdf = new jsPDF('p', 'pt', 'a4');    
        const el = document.createElement('div');
    pdf.html(data as HTMLElement, {
      callback: (pdf) => {
        pdf.save('invoice.pdf');
      },
      x: 20,
      y: 20
    });
  }
  onDropdownChange(val:any) {
    this.generatePdf();      
    this.router.navigate(['/home']);


  }
}
