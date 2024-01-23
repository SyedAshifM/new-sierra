import { Component , OnInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  accountType:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', accountType:'savings'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',accountType:'savings'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',accountType:'savings'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',accountType:'savings'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',accountType:'savings'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',accountType:'savings'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',accountType:'savings'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',accountType:'savings'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',accountType:'savings'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',accountType:'savings'},
];
@Component({
  selector: 'app-banking-information',
  templateUrl: './banking-information.component.html',
  styleUrls: ['./banking-information.component.scss']
})
export class BankingInformationComponent  {
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','accountType'];
 //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

}
