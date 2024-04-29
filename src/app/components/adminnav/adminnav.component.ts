import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.css']
})
export class AdminnavComponent implements OnInit {
  isScrolling:boolean=false;
  ngOnInit(): void {
    window.addEventListener('scroll',()=>{
      if(window.scrollY>30){
     this.isScrolling=true;
      }else{
this.isScrolling=false;
      }


    })

  }}
