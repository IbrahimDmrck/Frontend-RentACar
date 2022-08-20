import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetailDto } from '../models/carDetailDto';
import { CarImage } from '../models/carImage';
import { SingleResponseModel } from '../models/singleResponseModel';



@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44313/api/";
  constructor(private httpClient: HttpClient) { }




  getCarDetail(): Observable<ListResponseModel<CarDetailDto>> {
    let carDetailPath = this.apiUrl + "Cars/getcardetail";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(carDetailPath);
  }

  getCarDetailsByCarId(carId:number): Observable<ListResponseModel<CarDetailDto>> {
    let carDetailPath = this.apiUrl + "Cars/getcardetails?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(carDetailPath);
  }

  getCarsByBrandId(brandId: number): Observable<ListResponseModel<CarDetailDto>> {
    let carByBrandPath = this.apiUrl + "Cars/getcarsbybrandid?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(carByBrandPath);
  }

  getCarsByColorId(colorId: number): Observable<ListResponseModel<CarDetailDto>> {
    let carByColorPath = this.apiUrl + "Cars/getcarsbycolorid?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(carByColorPath);
  }

  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let imagesByCarId=this.apiUrl+" CarImages/getbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(imagesByCarId);
   
  }

 

}
