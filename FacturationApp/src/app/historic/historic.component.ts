import { Component,OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { InvoiceComponent } from '../invoice/invoice.component';
import { InvoiceDetailsComponent } from '../invoice-details/invoice-details.component';
import { MatDialog } from '@angular/material/dialog';
import { CommandComponent } from '../command/command.component';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {
  
  historicItems: any[] = [];
  memoryData:any[] = []; // Replace any[] with your actual data type
   @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any> ;
  constructor(private router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    // Fetch historic items data from service or wherever you are getting it
    this.historicItems = [
      { referenceId: '1', dateTime: '2024-06-21 10:30:00',user:"hamza zayani" },
      { referenceId: '2', dateTime: '2024-06-20 15:45:00',user:"malek tizaoui" },
      { referenceId: '3', dateTime: '2024-06-20 15:45:00',user:"JONJON JONSON" },
      // Add more items as needed
    ];
    this.memoryData=this.historicItems
  }

  showDetails(item: any) {
    // Logic to show details for the selected item
    console.log('Showing details for:', item);
   
    this.dialog.open(InvoiceComponent,{
       width: '750px',
      height: '700px',
      data: "display"
    });
    // Implement your details display logic here, e.g., open a modal
  }
  filteredItems(val:any) {
   
    if(val.data){
   this.memoryData=[...this.historicItems.filter(item =>
    item.referenceId.includes(val.data))]
    console.log(this.historicItems)
  }
  else this.memoryData=this.historicItems
}
}



