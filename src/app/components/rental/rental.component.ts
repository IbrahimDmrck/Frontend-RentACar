import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { Rental } from 'src/app/models/rental';
import { RentalDetailDto } from 'src/app/models/rentalDetailDto';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:Rental[] = [];
  rentalDetails:RentalDetailDto[]=[];
  dataLoaded=false;
 
   constructor(private rentalService:RentalService ) { }
 
   ngOnInit(): void {
     this.getRentals(); 
     this.getRentalDetail();
   }
 
   getRentals(){
     this.rentalService.getRentals().subscribe(response=>{
       this.rentals=response.data
       this.dataLoaded=true;
     })
   }

   getRentalDetail(){
    this.rentalService.getRentalDetail().subscribe(response=>{
      this.rentalDetails=response.data;
      this.dataLoaded=true;
    })
   }
}
