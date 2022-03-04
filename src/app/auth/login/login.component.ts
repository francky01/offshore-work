import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private myRouter: Router,
    public fb: FormBuilder,
    private authService: AuthService
  ) { }

  errorFind: boolean = false;
  isSubmitted: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';
  loginForm = this.fb.group({
    email: [null, Validators.compose([
      Validators.email,
      Validators.required])
    ],
    password: ['', [Validators.required]]
  }
  );

  ngOnInit(): void {
  }


  onSubmit() {

    this.isSubmitted = true;
    if (this.loginForm.valid) {

      localStorage.removeItem('userEmail');
      localStorage.removeItem('userId');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userLastName');
      localStorage.removeItem('userFirstName');


    }
  }
}
