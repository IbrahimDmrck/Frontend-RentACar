import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {


  colors:Color[] = [];
  currentColor?:Color=null as any;
  filterText=""
  dataLoaded=false;
 
   constructor(private colorService:ColorService ) { }
 
   ngOnInit(): void {
     this.getColors();
   }
 
   getColors(){
     this.colorService.getColors().subscribe(response=>{
       this.colors=response.data
       this.dataLoaded=true;
     })
   }

   setCurrentColor(color: Color) {
       this.currentColor = color;
      }

      getCurrentColor(color: Color) {
        return (this.currentColor == color) ? 'list-group-item active btn' : 'list-group-item  btn';
      }

      getListAllColors() {
        return (this.currentColor == null) ? 'list-group-item active btn' : 'list-group-item  btn';
      }

      reset() {
        this.currentColor=null as any ;
      }

}
