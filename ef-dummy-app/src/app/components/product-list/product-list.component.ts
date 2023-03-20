import { Component, OnInit } from '@angular/core';
import { ProductDto } from 'src/app/models/product-dto';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: ProductDto[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next: (res) => {
        console.log(res)
        this.products = res.products
      },
      error: (err) => console.log(err)
    });
  }
}
