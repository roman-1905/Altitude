import { Component } from '@angular/core';

import { WalletService } from 'app/metrix/providers/wallet.service';
import { CurrencyService } from 'app/providers/currency.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
})

export class NavBarComponent {


  constructor(
  	public wallet: WalletService,
    public currencyService: CurrencyService
  ) {

  }

}
