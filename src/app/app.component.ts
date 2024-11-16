import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app';

  searchValue: string = '';
  sidebarVisible2: boolean = false;
  header: string = 'Header';
  subHeader: string = 'Subheader';
  productLists: any = [];

  constructor(private appService: AppService) {
    this.getProductLists();
  }

  getProductLists() {
    const products = this.appService.getProductLists();
    products.forEach((product: any) => {
      if (product.quantity && product.quantity <= product.low_quantity) {
        product.low_stock = true;
      }
      if (product.quantity === 0) {
        product.out_of_stock = true;
      }

    });
    this.productLists = products;
  }
}
