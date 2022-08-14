import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetailDtoResponseModel } from '../models/customerDetailDtoResponseModel ';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
urlCustomerGetAll="https://localhost:44313/api/Customers/getall";
urlCustomerDetail="https://localhost:44313/api/Customers/getcustomerdetail";
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<CustomerResponseModel>{
    return this.httpClient.get<CustomerResponseModel>(this.urlCustomerGetAll);
  }

  getCustomerDetail():Observable<CustomerDetailDtoResponseModel>{
    return this.httpClient.get<CustomerDetailDtoResponseModel>(this.urlCustomerDetail);
  }
}
