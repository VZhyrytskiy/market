import {Component, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";
import {ProductModel} from "../../product-list/product/models/product.model";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  cartList = this.cartService.cartList;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  trackByNames(index: number, product: ProductModel): number {
    return index
  }

}
