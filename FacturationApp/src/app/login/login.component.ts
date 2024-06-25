import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userForm: FormGroup= new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),

  });;

  constructor(private fb: FormBuilder,private router: Router) {
    
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted!', this.userForm.value);
     this.router.navigate(['/home']);
    }
  }
  goToLogin() {
    this.router.navigate(['/home']);
  }

}
