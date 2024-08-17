import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { ItemTabsComponent } from "../itemTabs/itemTabs.component";

@Component({
  selector: 'app-itemcard',
  standalone: true,
  imports: [ReactiveFormsModule, ItemTabsComponent],
  templateUrl: './itemCard.component.html',
  styleUrl: './itemCard.component.scss'
})
export class ItemCardComponent implements OnInit {
  bioSection = new FormGroup({
    CategoryCode: new FormControl<string>(''),
    openDate: new FormControl<string>(this.formatDate(new Date())),
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
    priceDate: new FormControl<string>(this.formatDate(new Date()))
  });
  constructor() { }
  ngOnInit() {
    this.bioSection.patchValue({CategoryCode:"sdsads"});
  }

  private formatDate(date: Date): string {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  }
}