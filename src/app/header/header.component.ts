import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) { }

  HomeClick(){
    this.router.navigate(['home']);
  }

  nameUser = localStorage.getItem('userName');

  SignOutClick(){
    localStorage.clear();
    this.router.navigate(['']);
  };

}
