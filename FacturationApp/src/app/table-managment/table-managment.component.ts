import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-managment',
  templateUrl: './table-managment.component.html',
  styleUrls: ['./table-managment.component.css']
})
export class TableManagmentComponent {
  images:any[]=[1,3,4,5,1,1,1,1,1]
  items = [{status:0,id:1},{status:1,id:1},{status:1,id:1},
    {status:0,id:1},{status:0,id:1},{status:0,id:1},{status:1,id:1}
   
    // Add more items as needed
  ];
constructor(private router:Router){
  
}
  getItemClass(index: number) {
    // const classes = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-danger'];
    // return classes[index % classes.length]; 
    if(this.items[index].status==1)
    return 'bg-success'
  else return 'bg-danger'
  }
  goToPage(item:any){
    this.router.navigate(['/command',item.id,item.status==1]);
  }
  goToHistoric(){
    this.router.navigate(['/historic']);
  }
  reserve(i:number){
    if (this.items[i] && this.items[i].status === 1) {
      this.items[i].status = 0;
    }
  }

}
