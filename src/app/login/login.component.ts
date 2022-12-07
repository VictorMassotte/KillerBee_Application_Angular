import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  coLoginForm: loginForm = new loginForm();

  @ViewChild("loginForm")
  loginForm!: NgForm;

  isSubmitted: boolean = false;

  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveIngredients(this.coLoginForm).subscribe(async data => {
        if (data != null) {
          this.toastr.success("Bienvenue !");
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 500);
        }
      },
        async error => {
          this.toastr.error("Mauvais identifiants ou mot de passe !");
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 100);
        });
    }
  }

}

export class loginForm {
  email: string = "";
  password: string = "";
}
