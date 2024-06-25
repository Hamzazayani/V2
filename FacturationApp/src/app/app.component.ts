// app.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForm: FormGroup= new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),

  });;

  constructor(private fb: FormBuilder,private router: Router) {
    
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.router.navigate(['/home']);
      console.log('Form Submitted!', this.userForm.value);
    }
  }
}
