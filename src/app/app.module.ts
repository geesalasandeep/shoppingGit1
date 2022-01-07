import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { AuthorizationInterceptor } from './authorization.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    HeaderComponent,
    LoginComponent,
    ProductsComponent,
    RegisterComponent,
    SpinnerComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

    
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : AuthorizationInterceptor,
    multi:true
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
