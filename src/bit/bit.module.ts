import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { BitcoinPriceComponent } from './bitcoin-price/bitcoin-price.component';



@NgModule({
  declarations: [
    BitcoinPriceComponent
  ],
  imports: [
    CommonModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class BitModule { }
