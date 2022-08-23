import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-brand-select-option-filter',
  templateUrl: './brand-select-option-filter.component.html',
  styleUrls: ['./brand-select-option-filter.component.css']
})
export class BrandSelectOptionFilterComponent implements OnInit {

  brands:Brand[]

  currentBrandId:number
  constructor(
    private brandService:BrandService,
   private routerService:RouterService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.getBrands()

    this.activatedRoute.params.subscribe(params => {
      this.currentBrandId = params["brandId"]
    })
  }

getBrands(){
  this.brandService.getBrands().subscribe(response=>{
    this.brands=response.data
  })

}

routeToCarDetailsPageByBrandId() {
  this.routerService.carDetailsPageByBrandId(this.currentBrandId)
}






}
