import { Component,OnDestroy } from '@angular/core';
import { Router ,NavigationEnd} from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'new-sierra';

  private destroy$ = new Subject<void>();

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      takeUntil(this.destroy$)
    ).subscribe((event: NavigationEnd) => {
      this.showLoginButton = event.urlAfterRedirects !== '/login';
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  // navigateToHome(): void {
  //   this.router.navigate(['/home']);
  // }
  
  // navigateToOwnershipDetails(): void {
  //   this.router.navigate(['/ownership-details']);
  // }
  
  // navigateToPaymentHistory(): void {
  //   this.router.navigate(['/payment-history']);
  // }
  
  // navigateToPortalTickets(): void {
  //   this.router.navigate(['/portal-tickets']);
  // }

  showLoginButton: boolean = true;

  handleMenuToggle(event: boolean) {
    console.log('Menu Toggled:', event);
  }
  
}
