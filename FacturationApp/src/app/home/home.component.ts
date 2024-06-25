import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  elementSelected:any="";
  constructor(private router: Router) {
    this.elementSelected="menu";

  }

  onDropdownChange(event: any): void {
    // const value = event.target.value;
    // if (value) {
    //   this.router.navigate([`/${value}`]);
    // }
   // this.router.n
   console.log(event.target.value)
    this.elementSelected=event.target.value;
  }
}
