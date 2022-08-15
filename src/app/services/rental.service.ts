import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailDtoResponseModel } from '../models/rentalDetailDtoResponseModel';
import { RentalResponseModel } from '../models/rentalResponseModel ';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
urlRentalGetAll="https://localhost:44313/api/Rentals/getall";
urlRentalDetail="https://localhost:44313/api/Rentals/getrentaldetail";
                
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.urlRentalGetAll);
  }

  getRentalDetail():Observable<RentalDetailDtoResponseModel>{
    return this.httpClient.get<RentalDetailDtoResponseModel>(this.urlRentalDetail);
  }

}
