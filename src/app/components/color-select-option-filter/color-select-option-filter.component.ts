import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-color-select-option-filter',
  templateUrl: './color-select-option-filter.component.html',
  styleUrls: ['./color-select-option-filter.component.css']
})
export class ColorSelectOptionFilterComponent implements OnInit {

  colors:Color[]
  currentColorId:number
  constructor(
    private colorService:ColorService,
   private routerService:RouterService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.getColors()

    this.activatedRoute.params.subscribe(params => {
      this.currentColorId = params["colorId"]
    })
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
     
    })
  }

routeToCarDetailsPageByColorId() {
  this.routerService.carDetailsPageByColorId(this.currentColorId)
}

}
