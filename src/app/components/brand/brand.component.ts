import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: Brand[] = [];
  currentBrand?: Brand =null as any;
  filterText="";
  dataLoaded = false;

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data
      this.dataLoaded = true;
    })
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }

  getCurrentBrand(brand: Brand) {
    return (this.currentBrand == brand) ? 'list-group-item active btn' : 'list-group-item  btn';
  }

  getListAllBrands() {
    return (this.currentBrand == null) ? 'list-group-item active btn':'list-group-item  btn';
  }

  reset() {
 this.currentBrand = null as any 

  }
}
