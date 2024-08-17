import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'


@Component({
  selector: 'app-historical-info',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './historical-info.component.html',
  styleUrl: './historical-info.component.scss'
})
export class HistoricalInfoComponent {
  historicalSection = new FormGroup({
    CategoryCode: new FormControl<string>(''),
    // openDate: new FormControl<string>(this.formatDate(new Date())),
    itemNumber: new FormControl<string>(''),
    arabic: new FormControl<string>(''),
    Latin: new FormControl<string>(''),
    remarks: new FormControl<string>(''),
    weigthAverage: new FormControl<number>(0),
    mnimumQTY: new FormControl<number>(0),
    outstandOrder: new FormControl<number>(0),
    l12Sale: new FormControl<string>(''),
    costPrice: new FormControl<number>(0),
    salePrice: new FormControl<number>(0),
    // priceDate: new FormControl<string>(this.formatDate(new Date()))
  });
}
