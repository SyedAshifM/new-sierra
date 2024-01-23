import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OwnershipDetailsComponent } from './ownership-details/ownership-details.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { PortalTicketsComponent } from './portal-tickets/portal-tickets.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AddressBookComponent } from './address-book/address-book.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogService } from './dialog.service';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BankingInformationComponent } from './banking-information/banking-information.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MyAccountComponent } from './my-account/my-account.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    OwnershipDetailsComponent,
    PaymentHistoryComponent,
    PortalTicketsComponent,
    AddressBookComponent,
    ContactInformationComponent,
    PopupComponent,
    ToolbarComponent,
    BankingInformationComponent,
    MyAccountComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    
  ],

  providers: [DialogService],
  bootstrap: [AppComponent],
})

export class AppModule { }
