import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { ListResponseModel } from '../models/listResponseModel';
import { Payment } from '../models/Payment';
import { ResponseModel } from '../models/responseModel';
import { TemplateService } from './template.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

urlApiPayment="https://localhost:44313/api/Payments/"

  constructor(private httpClient:HttpClient,private toastrService:ToastrService,private templatesService:TemplateService) { }

  pay(payment:Payment){
    return this.httpClient.post<ResponseModel>(this.urlApiPayment+"pay",payment)
  }

  add(payment:Payment){
    this.httpClient.post<ResponseModel>(this.urlApiPayment+"add",payment).subscribe(response=>{
      this.toastrService.success(response.message)
    },errorResponse=>this.templatesService.errorResponse(errorResponse))
  }

  delete(payment:Payment){
    this.httpClient.post<ResponseModel>(this.urlApiPayment+"delete",payment).subscribe(response=>{
      this.toastrService.success(response.message)
      window.location.reload()
    },errorResponse=>this.templatesService.errorResponse(errorResponse))
  }

  getAllByCustomerId(customerId:number){
    return this.httpClient.get<ListResponseModel<Payment>>(this.urlApiPayment+"getAllByCustomerId?customerId="+customerId)
  }

  checkIfThisCardIsAlreadySavedForThisCustomer(payment:Payment){
    return this.httpClient.post<ResponseModel>(this.urlApiPayment+"checkIfThisCardIsAlreadySavedForThisCustomer",payment);
  }
}
