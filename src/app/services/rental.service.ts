import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetailDto } from '../models/rentalDetailDto';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
urlRentalGetAll="https://localhost:44313/api/Rentals/getall";
urlRentalDetail="https://localhost:44313/api/Rentals/getrentaldetail";
                
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.urlRentalGetAll);
  }

  getRentalDetail():Observable<ListResponseModel<RentalDetailDto>>{
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(this.urlRentalDetail);
  }

}
