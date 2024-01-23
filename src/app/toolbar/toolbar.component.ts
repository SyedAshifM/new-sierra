import { Component,Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
 
})
export class ToolbarComponent implements OnInit {

  isTransparent:boolean = true;
  constructor(private router: Router){}
  // @Input() showLoginButton: boolean = true;
  // @Output() menuToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  // isMenuToggled: boolean = false;

  // toggleMenu() {
  //   this.isMenuToggled = !this.isMenuToggled;
  //   this.menuToggled.emit(this.isMenuToggled);
  // }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Update isTransparent based on the current route
        this.isTransparent = event.url === '/home';
      }
    });
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }
  
  navigateToOwnershipDetails(): void {
    this.router.navigate(['/ownership-details']);
  }
  
  navigateToPaymentHistory(): void {
    this.router.navigate(['/payment-history']);
  }
  
  navigateToPortalTickets(): void {
    this.router.navigate(['/portal-tickets']);
  }
  
}
