import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {
  constructor(private router:Router,private route: ActivatedRoute){
    this.route.params.subscribe(params => {
      this.id = +params['id']; // The '+' converts the string to a number
      this.status = params['status'] === 'true'; // Convert string to boolean
    });
  }
  ngOnInit(): void {
    if(this.status)
      this.getCommand()
  }
  status:boolean=false
  id:any=null;
  categories = ['Drinks', 'foods'];
  products = ['coke', 'pizza'];
  commands:any[] = [{ category: '', product: '', number: '' }];

  getCommand(){
    this.commands = [
      { category: '', product: '', number: '' },
      { category: '', product: '', number: '' }
      // Add more command objects as needed
    ]; 
  }
  getCategories(){

  }
getProductByCategories(id:string){

}
addArticle(){
  this.commands.push({ category: '', product: '', number: '' })
}
deleteItem(i:number){
this.commands.splice(i,1)
}
goToInvoice(){
  this.router.navigate(['/invoice']);
}
back(){
  this.router.navigate(['/home']);

}
}
