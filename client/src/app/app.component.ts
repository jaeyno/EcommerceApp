import { BasketService } from './basket/basket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'EcommerceApp';

  constructor(private basketService: BasketService) {}
  
  ngOnInit(): void {
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
