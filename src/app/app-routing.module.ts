import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OwnershipDetailsComponent } from './ownership-details/ownership-details.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { PortalTicketsComponent } from './portal-tickets/portal-tickets.component';
import { LoginComponent } from './login/login.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { PopupComponent } from './popup/popup.component';
import { BankingInformationComponent } from './banking-information/banking-information.component';
import { MyAccountComponent } from './my-account/my-account.component';


const routes: Routes = [
  { path:'',
  redirectTo:'home',
  pathMatch:'full'
},
{
  path:'home',
  component:HomeComponent,
},
{
  path:'ownership-details',
  component:OwnershipDetailsComponent,
},
{
  path:'payment-history',
  component:PaymentHistoryComponent,
},
{
  path:'portal-tickets',
  component:PortalTicketsComponent,
},
{
  path:'login',
  component:LoginComponent,
},
{
  path:'contact-information',
  component:ContactInformationComponent,
},
{
  path:'address-book',
  component:AddressBookComponent,
},
{
  path:'popup',
  component:PopupComponent,
},
{
  path:'banking-information',
  component:BankingInformationComponent,
},
{
  path:'my-account',
  component:MyAccountComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
