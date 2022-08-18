import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from './models/carImage';
import { ListResponseModel } from './models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = "https://localhost:44313/api/";
  apiImgUrl = "https://localhost:44313/api/Uploads/Images/";
  constructor(private httpClient: HttpClient) { }

  getAllCarImages():Observable<ListResponseModel<CarImage>>{
    let allImages=this.apiUrl+"CarImages/getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(allImages);
  }

  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let imagesByCarId=this.apiUrl+" CarImages/getbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(imagesByCarId);
   
  }

  getImagePath(imagePath: string) {
    return this.apiImgUrl + imagePath;
  }
}
