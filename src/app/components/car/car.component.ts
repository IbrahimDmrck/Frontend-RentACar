import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  carDetailDtos: CarDetailDto[] = [];
  //cars:Car[]=[]
  dataLoaded = false;

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"])
      } else {
        this.getCarDetail();
      }
    })
  }

  getCarDetail() {
    this.carService.getCarDetail().subscribe(response => {
      this.carDetailDtos = response.data
      this.dataLoaded = true;
    })
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe(response => {
      this.carDetailDtos = response.data
      this.dataLoaded = true;
    })
  }

}
