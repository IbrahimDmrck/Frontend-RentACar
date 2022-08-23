export interface RentalDetailDto{
    id:number;
    customerName:string;
    brandName:string;
    rentDate:Date;
    returnDate?:Date;
}