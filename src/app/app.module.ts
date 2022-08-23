import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomersComponent } from './components/customers/customers.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarComponent } from './components/car/car.component';
import { HttpClientModule } from '@angular/common/http';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { BrandSelectOptionFilterComponent } from './components/brand-select-option-filter/brand-select-option-filter.component';
import { FormsModule } from '@angular/forms';
import { ColorSelectOptionFilterComponent } from './components/color-select-option-filter/color-select-option-filter.component';
import { BrandFilterPipePipe } from './pipes/brand-filter-pipe.pipe';
import { ColorFilterPipePipe } from './pipes/color-filter-pipe.pipe';
import { CarFilterPipepePipe } from './pipes/car-filter-pipepe.pipe';






@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CustomersComponent,
    RentalComponent,
    NaviComponent,
    CarComponent,
    CarDetailComponent,
    BrandSelectOptionFilterComponent,
    ColorSelectOptionFilterComponent,
    BrandFilterPipePipe,
    ColorFilterPipePipe,
    CarFilterPipepePipe,

 
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass:"toast-top-right"})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
