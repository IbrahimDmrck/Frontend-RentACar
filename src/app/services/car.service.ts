import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetailDto } from '../models/carDetailDto';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44313/api/";
  constructor(private httpClient: HttpClient) { }


  getCars(): Observable<ListResponseModel<Car>> {
    let carGetAllPath = this.apiUrl + "Cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(carGetAllPath);
  }

  getCarDetail(): Observable<ListResponseModel<CarDetailDto>> {
    let carDetailPath = this.apiUrl + "Cars/getcardetail";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(carDetailPath);
  }

  getCarsByBrandId(brandId: number): Observable<ListResponseModel<CarDetailDto>> {
    let carDetailPath = this.apiUrl + "Cars/getcarsbybrandid?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(carDetailPath);
  }

}
