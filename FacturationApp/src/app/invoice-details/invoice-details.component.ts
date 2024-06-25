import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent {
  public dialogRef: MatDialogRef<InvoiceDetailsComponent> | undefined
  historicItems: any[] = [
    { referenceId: 'REF001', dateTime: '2024-06-21 10:30:00' },
    { referenceId: 'REF002', dateTime: '2024-06-20 15:45:00' },
    { referenceId: 'REF003', dateTime: '2024-06-19 08:00:00' },
    // Add more items as needed
  ];

  constructor() { }

  showDetails(item: any) {
    console.log('Showing details for:', item);
    // Implement your details display logic here, e.g., open a modal
  }
}
