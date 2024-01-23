import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ContactInformationComponent } from './contact-information/contact-information.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  // constructor(private dialog: MatDialog) { }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(EditComponent, {
  //     width: '400px', // Adjust the width as needed
  //     // Other dialog configuration options
  //   });

  //   // Subscribe to the afterClosed event to perform actions after the dialog is closed
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('Dialog closed', result);
  //   });
  // }
}
