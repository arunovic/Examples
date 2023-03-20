import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDto } from 'src/app/models/product-dto';
import { ProductsService } from 'src/app/services/products.service';
import { NotificationDialogComponent } from '../dialogs/notification-dialog/notification-dialog.component';

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
  loading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
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

        if (this.productId) this.getProductById(this.productId);
      } else {
        this.isNewProduct = true;
        this.loading = false;
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
      error: (err) => console.error(err),
      complete: () => this.loading = false
    });
  }

  onSubmit(): void {
    if (!this.productForm.valid) return;
    let product: ProductDto = this.productForm.value;
    this.loading = true;
    if (this.isNewProduct) {
      this.productsService.createProduct(product).subscribe({
        next: (res) => {
          console.log(res)
          this.openNotificationDialog('Product created successfully!');
        },
        error: (err) => console.error(err),
        complete: () => this.loading = false
      });
    } else {
      if (!this.productId) return;

      this.productsService.updateProduct(this.productId, product).subscribe({
        next: (res) => {
          console.log(res)
          this.openNotificationDialog('Product updated successfully!');
        },
        error: (err) => console.error(err),
        complete: () => this.loading = false
      });
    }
  }

  openNotificationDialog(data: string): void {
    const dialogRef = this.dialog.open(NotificationDialogComponent, {
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.navigate(['/products']);
    });
  }
}
