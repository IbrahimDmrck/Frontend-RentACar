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
  carDetails:CarDetailDto[]=[];
  // imagePath:string[];
  // carDetailDto:CarDetailDto[]=[]
  // carImages:CarImage[]
  currentCar: CarDetailDto;
  carImages:CarImage[]=[]

  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["carId"]) {

       // this.getCarImagesByCarId(params["carId"]);
        this.getCarDetailsByCarId(params["carId"]);

      } 
    })
  
  }

  getCarDetailsByCarId(id:number)
  {
    this.carService.getCarDetailsByCarId(id).subscribe(response=>{
      this.carDetails=response.data;
      //this.carImages=response.data.carImage
    })
  }

  // getCarDetailsByCarId(carId:number){
  //   this.carService.getCarDetailsByCarId(carId).subscribe((response)=>{
  //     this.carDetailDto=response.data;
  //     this.carDetailDto = response.data[0]
  //     this.carImage=this.carDetailDto.carImages;
  //     this.dataLoaded = true;

  //   })
  // }

  getImage(carImage:CarDetailDto){
    console.log(carImage);
    return "https://localhost:44313/Uploads/Images/" +carImage.carImages[0].imagePath;
  
  }

  // getCarImagesByCarId(carId:number){
  //   this.carImageService.getCarImagesByCarId(carId).subscribe(repsonse=>{
  //     this.carImages=repsonse.data
  //   })
  // }

  getCarImagesByCarId(carId:number){
    this.carService.getCarImagesByCarId(carId).subscribe(response=>{
      this.carImages=response.data
    })     
  }
  
 

}
