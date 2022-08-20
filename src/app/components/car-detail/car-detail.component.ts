import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails:CarDetailDto
  carImages:CarImage[]
  constructor(private carService:CarService,private carImageService:CarImageService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["carId"]) {
        this.getCarDetailsByCarId(params["carId"]);
        this.getCarImagesByCarId(params["carId"]);
      }
    })
  }

  getCarDetailsByCarId(carId:number){
this.carService.getCarDetailsByCarId(carId).subscribe(response=>{
  this.carDetails=response.data
})
  }

  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
      this.carImages=response.data
    })
  }

  getImage(carImage:CarImage){
    return "https://localhost:44313/Uploads/Images/" + carImage.imagePath;
  
  }

  getActiveString(carImage:CarImage){
    if(carImage===this.carImages[0]){
      return "active"
    }else{
      return ""
    }
  }
  

}
