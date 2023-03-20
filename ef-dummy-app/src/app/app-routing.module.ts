import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'products', component: ProductListComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'products/new', 
    component: ProductFormComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'products/edit/:id', 
    component: ProductFormComponent, 
    canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
