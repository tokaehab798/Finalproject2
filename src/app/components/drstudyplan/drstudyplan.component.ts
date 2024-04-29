import { Component } from '@angular/core';

@Component({
  selector: 'app-drstudyplan',
  templateUrl: './drstudyplan.component.html',
  styleUrls: ['./drstudyplan.component.css']
})
export class DrstudyplanComponent {
  flag:boolean=true;
  modelImag:string='';
  srcs:string[]=[
    "./assets/لائحة.png"
  ]
  hideelement( element:EventTarget|null ,img:HTMLImageElement):void{
    if(element==img) return;
    else
      this.flag=true;
    }

}
