import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'EcommerceApp';

  constructor(private basketService: BasketService, private accountService: AccountService) {}
  
  ngOnInit(): void {
    this.loadBasket();
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    const token = localStorage.getItem('token');
    this.accountService.loadCurrentUser(token).subscribe(() => {
      console.log('loaded user');
    }, error => {
      console.log(error);
    })
  }

  loadBasket() {
    const basektId = localStorage.getItem('basket_id');
    if (basektId) {
      this.basketService.getBasket(basektId).subscribe(() => {
        console.log('initialize basket')
      }, error => {
          console.log(error);
        }
      )
    }
  }

}
