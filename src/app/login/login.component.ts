import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router ,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isTransparent = false;


   loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [false],
    });;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.navigateToMyAccount();
    }
  }
  navigateToMyAccount(){
    const navigationExtras: NavigationExtras = {
      queryParams: { /* additional parameters if needed */ },
    };

    // Navigate to the 'my-account' route if the form is valid
    this.router.navigate(['/my-account'], navigationExtras);
  }
}
