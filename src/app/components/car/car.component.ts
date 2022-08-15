import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  carDetailDtos:CarDetailDto[] = [];
 dataLoaded=false;

  constructor(private carService:CarService ) { }

  ngOnInit(): void {
    this.getCarDetail();
  }

  getCarDetail(){
    this.carService.getCarDetail().subscribe(response=>{
      this.carDetailDtos=response.data
      this.dataLoaded=true;
    })
  }

}
