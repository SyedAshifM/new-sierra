import { Component,Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router){}
  @Input() showLoginButton: boolean = true;
  @Output() menuToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  isMenuToggled: boolean = false;

  toggleMenu() {
    this.isMenuToggled = !this.isMenuToggled;
    this.menuToggled.emit(this.isMenuToggled);
  }
}
