import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drnavbar',
  templateUrl: './drnavbar.component.html',
  styleUrls: ['./drnavbar.component.css']
})
export class DrnavbarComponent implements OnInit {
  isScrolling:boolean=false;
  ngOnInit(): void {
    window.addEventListener('scroll',()=>{
      if(window.scrollY>30){
     this.isScrolling=true;
      }else{
this.isScrolling=false;
      }


    })
    
  }
  toggleDropdown(event: MouseEvent): void {
    event.stopPropagation();
  }
}

