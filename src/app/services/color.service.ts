import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  urlApiColor="https://localhost:44313/api/Colors/";
  constructor(private httpClient:HttpClient) { }

getColors():Observable<ListResponseModel<Color>>{
  return this.httpClient.get<ListResponseModel<Color>>(this.urlApiColor+"getall");
}

getByColorId(id:number):Observable<SingleResponseModel<Color>>{
  return this.httpClient.get<SingleResponseModel<Color>>(this.urlApiColor+"getbyid?id="+id)
}

}
