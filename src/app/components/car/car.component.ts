import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDetailDtos: CarDetailDto[] = [];
  carImage:CarImage[]=[];
  currentCar: CarDetailDto;
  filterText=""
  dataLoaded = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
  

  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["brandId"]) {

        this.getCarsByBrand(params["brandId"]);

      } else if (params["colorId"]) {

        this.getCarsByColorId(params["colorId"]);

      }
      else {
        this.getCarDetail();
      }
    })
  }

  
getImage(carImage:CarDetailDto){
  console.log(carImage);
  return "https://localhost:44313/Uploads/Images/" +carImage.carImages[0].imagePath;

}


  getCarDetail() {
    this.carService.getCarDetail().subscribe((response) => {
      this.carDetailDtos = response.data;
      this.dataLoaded = true;
    })
  }



  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.carDetailDtos = response.data
      this.dataLoaded = true;
    })
  }

  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.carDetailDtos = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentCar(carDetailDto: CarDetailDto) {
    this.currentCar = carDetailDto;
  }






}
