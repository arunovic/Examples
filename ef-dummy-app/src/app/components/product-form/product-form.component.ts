import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDto } from 'src/app/models/product-dto';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;
  categories: string[] = [];
  product: ProductDto | undefined;
  productId: string | null = null;
  isNewProduct: boolean = true;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      category: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getCategories();
    
    this.route.paramMap.subscribe((params) => {
      if (params.has('id')) {
        this.isNewProduct = false;
        this.productId = params.get('id');

        if(this.productId) this.getProductById(this.productId);
      } else {
        this.isNewProduct = true;
      }
    });
  }

  getCategories(): void {
    this.productsService.getCategories().subscribe({
      next: (res) => {
        console.log(res)
        this.categories = res
      },
      error: (err) => console.error(err)
    });
  }

  getProductById(id: string): void {
    this.productsService.getProduct(id).subscribe({
      next: (res) => {
        console.log(res)
        this.product = res;
        this.productForm.patchValue(res);
      },
      error: (err) => console.error(err)
    });
  }

  onSubmit(): void {
    if (!this.productForm.valid) return;
    let product: ProductDto = this.productForm.value;

    if (this.isNewProduct) {
      this.productsService.createProduct(product).subscribe({
        next: (res) => {
          console.log(res)
          alert('Product created successfully!');          
          //this.router.navigate(['/products']);
        },
        error: (err) => console.error(err)
      });
    } else {
      if (!this.productId) return;
      
      this.productsService.updateProduct(this.productId, product).subscribe({
        next: (res) => {
          console.log(res)
          alert('Product updated successfully!');          
          //this.router.navigate(['/products']);
        },
        error: (err) => console.error(err)
      });
    }
  }
}
