import { Component } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent {
  constructor(private dialogService: DialogService) {}

  // openDialog(): void {
  //   //this.dialogService.openDialog();
  // }
}
