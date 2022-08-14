import { CarDetailDto } from "./carDetailDto";
import { ResponseModel } from "./responseModel";

export interface CarDetailResponseModel extends ResponseModel{
    data:CarDetailDto[];
}