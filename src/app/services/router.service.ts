import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  CarDetailsByBrandIdPath = "cars/brand/";
  CarDetailsByColorIdPath="cars/color/";

  constructor(  private router:Router) { }

  carDetailsPageByBrandId(brandId: number) {
    if (brandId > 0) this.router.navigate([this.CarDetailsByBrandIdPath + brandId])
  }

  carDetailsPageByColorId(colorId: number) {
    if (colorId > 0) this.router.navigate([this.CarDetailsByColorIdPath + colorId])
  }
}
