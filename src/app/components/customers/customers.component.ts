import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerDetailDto } from 'src/app/models/customerDetailDto';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {


customersDetails: CustomerDetailDto[] = []
  dataLoaded=false;
 
   constructor(private customerService:CustomerService ) { }
 
   ngOnInit(): void {
     this.getCustomerDetail();
   }
 
   getCustomerDetail(){
     this.customerService.getCustomerDetail().subscribe(response=>{
       this.customersDetails=response.data
       this.dataLoaded=true;
     })
   }
}
