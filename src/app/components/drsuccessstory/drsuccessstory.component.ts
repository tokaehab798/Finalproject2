import { Component } from '@angular/core';

@Component({
  selector: 'app-drsuccessstory',
  templateUrl: './drsuccessstory.component.html',
  styleUrls: ['./drsuccessstory.component.css']
})
export class DrsuccessstoryComponent {
  srcsofprojects:string[]=[
    "./assets/comp2.jpg",
    "./assets/competition1.jpg",
    "./assets/cli2.jpg"
  ]

  compmember:string[]=[
    "./assets/usama.jpg",
    "./assets/ezz.jpg",
  ]
  compName:string[]=[
    "Mohamed Usamah",
    "Mohamed Ezz",
  ]

}
