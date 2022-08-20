import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerDetailDto } from '../models/customerDetailDto';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  urlCustomerGetAll="https://localhost:44313/api/Customers/getall";
  urlCustomerDetail="https://localhost:44313/api/Customers/getcustomerdetail";
  
    constructor(private httpClient:HttpClient) { }
  
    getCustomers():Observable<ListResponseModel<Customer>>{
      return this.httpClient.get<ListResponseModel<Customer>>(this.urlCustomerGetAll);
    }
  
    getCustomerDetail():Observable<ListResponseModel<CustomerDetailDto>>{
      return this.httpClient.get<ListResponseModel<CustomerDetailDto>>(this.urlCustomerDetail);
    }
}
