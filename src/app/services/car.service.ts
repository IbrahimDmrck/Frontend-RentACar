import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';
import { CarDetailResponseModel } from '../models/carDetailDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
urlCarGetAll="https://localhost:44313/api/cars/getall";
urlCarDetail="https://localhost:44313/api/Cars/getcardetail";
  constructor(private httpClient:HttpClient) { }


getCars():Observable< CarResponseModel >{
  return this.httpClient.get<CarResponseModel>(this.urlCarGetAll);
}

getCarDetail():Observable<CarDetailResponseModel>{
  return this.httpClient.get<CarDetailResponseModel>(this.urlCarDetail);
}

}
