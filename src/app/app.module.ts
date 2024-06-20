import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoinService } from './coin.service';
import { BitcoinPriceComponent } from '../bit/bitcoin-price/bitcoin-price.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgForOf } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BitcoinPriceComponent,
    CommonModule,
    NgIf,
    NgForOf
  
  ],
  providers: [
    provideClientHydration(), CoinService, provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
