import { CarImage } from "./carImage";


export interface CarDetailDto{
    carId:number;
    brandId:number;
    colorId:Number;
    carName:string;
    brandName:string;
    colorName:string;
    dailyPrice:number;
    carImages:CarImage[];
    description:string;
    typeOfVehicle:string;
    modelYear:number;
}