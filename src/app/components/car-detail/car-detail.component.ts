import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImageService } from 'src/app/car-image.service';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  dataLoaded=false
  carDetail:CarDetailDto
  carImages:CarImage[] = []

  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService
   ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["carId"]) {
        this.getCarDetailsByCarId(params["carId"])
        this.carImageService.getCarImagesByCarId(params["carId"]).subscribe(response=>{
          this.carImages = response.data
        })
      } 
    })
  
  }

  getCarDetailsByCarId(id:number)
  {
    this.carService.getCarDetailsByCarId(id).subscribe(response=>{
      this.carDetail=response.data[0]
    })
  }

  // getCarImagesByCarId(carId:number){
  //   this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
  //     this.carImage=response.data
  //   })     
  // }

  getFullImagePath(imagePath:string){
    return "https://localhost:44313/Uploads/Images/"+imagePath;
  }

  getActiveString(carImage:CarImage){
    if(carImage===this.carImages[0]){
      return "active"
    }else{
      return ""
    }
  }

  getImage(carImage:CarImage){
    return "https://localhost:44313/Uploads/Images/" + carImage.imagePath;
  
  }

// getCarImage(carId:number){
//   this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
//     this.carImages=response.data
//   })
// // return  "https://localhost:44313/Uploads/Images/"+carImage.imagePath
// }



}
