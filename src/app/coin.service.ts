import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) { }

  getBitcoinPrice(currency: string, Crypto: string): Observable<any> {
    const apiUrl = `https://api.coinbase.com/v2/prices/${Crypto}-${currency}/buy`;
    return this.http.get<any>(apiUrl);
  }
}