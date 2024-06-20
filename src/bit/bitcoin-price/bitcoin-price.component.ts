import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CoinService } from '../../app/coin.service';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

interface Currency {
  value: string;
  viewValue: string;
}

interface Crypto {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-bitcoin-price',
  standalone: true,
  templateUrl: './bitcoin-price.component.html',
  styleUrl: './bitcoin-price.component.css',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, CommonModule],
})

export class BitcoinPriceComponent implements OnInit{
  data:any;
  selectedCurrency: string = 'INR';
  selectedCrypto: string = 'BTC';

  Currencies: Currency[] = [
    {value: 'INR', viewValue: 'INR'},
    {value: 'USD', viewValue: 'USD'},
    {value: 'SGD', viewValue: 'SGD'},
    {value: 'CAD', viewValue: 'CAD'},
    {value: 'EUR', viewValue: 'EUR'},
    {value: 'AED', viewValue: 'AED'},
    {value: 'AUD', viewValue: 'AUD'},
    {value: 'BRL', viewValue: 'BRL'},
    {value: 'HKD', viewValue: 'HKD'},
    {value: 'NZD', viewValue: 'NZD'},
  ];

  Cryptos: Crypto[] = [
    {value: 'BTC', viewValue: 'BTC'},
    {value: 'XRP', viewValue: 'XRP'},
    {value: 'ETH', viewValue: 'ETH'},
    {value: 'BCH', viewValue: 'BCH'},
    {value: 'DOT', viewValue: 'DOT'},
    {value: 'SOL', viewValue: 'SOL'},
    {value: 'BNB', viewValue: 'BNB'},
    {value: 'TON', viewValue: 'TON'},
    {value: 'ADA', viewValue: 'ADA'},
    {value: 'LTC', viewValue: 'LTC'},
  ];

  constructor(private service: CoinService) { }

  ngOnInit(): void {
    this.fetchBitcoinPrice(this.selectedCurrency, this.selectedCrypto);
  }

  fetchBitcoinPrice(currency: string, Crypto:string): void {
    this.service.getBitcoinPrice(currency, Crypto).subscribe(
      (response) => {
        console.log(response);
        this.data = response.data;
      },
      (error) => {
        console.error('Error fetching data from API', error);
      }
    );
  }
  onCurrencyChange(): void {
    this.fetchBitcoinPrice(this.selectedCurrency, this.selectedCrypto);
  }
}