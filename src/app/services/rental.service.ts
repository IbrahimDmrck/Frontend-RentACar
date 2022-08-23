import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Payment } from '../models/Payment';
import { Rental } from '../models/rental';
import { RentalDetailDto } from '../models/rentalDetailDto';
import { ResponseModel } from '../models/responseModel';
import { PaymentService } from './payment.service';
import { RouterService } from './router.service';
import { TemplateService } from './template.service';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  urlApiRental="https://localhost:44313/api/Rentals/";
  
  constructor(private httpClient: HttpClient, private toastrService: ToastrService, private templatesService: TemplateService,
    private paymentService: PaymentService, private routerService: RouterService) { }

  payAndRent(payment: Payment, rental: Rental) {
    this.paymentService.pay(payment).subscribe(response => {
      this.toastrService.success(response.message)
      this.add(rental)
    }, errorResponse => this.templatesService.errorResponse(errorResponse))
  }

  add(rental: Rental) {
    this.httpClient.post<ResponseModel>(this.urlApiRental + "add", rental).subscribe(response => {
      this.toastrService.success(response.message)
      this.routerService.homePage()
    }, errorResponse => this.templatesService.errorResponse(errorResponse));
  }

  rulesForAdding(rental: Rental) {
    return this.httpClient.post<ResponseModel>(this.urlApiRental + "rulesForAdding", rental);
  }

  getDetails(): Observable<ListResponseModel<RentalDetailDto>> {
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(this.urlApiRental + "getRentalDetail");
  }
}
