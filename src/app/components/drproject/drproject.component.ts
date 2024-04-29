import { Component } from '@angular/core';

@Component({
  selector: 'app-drproject',
  templateUrl: './drproject.component.html',
  styleUrls: ['./drproject.component.css']
})
export class DrprojectComponent {
  srcsofproject:string[]=[
    "./assets/project9.jpg",
    "./assets/project10.jpg",
    "./assets/project12.jpeg"
  ]
  srcsofprojectteam:string[]=[
  "./assets/ziad2.jpg",
  "./assets/project11.jpg",
  "./assets/asmaa.jpg"
  ]
  srcsofteamname:string[]=[
    "Ziad Algendi",
    "Abdul-Rahman Al-Jammal",
    "Asmaa Elsayed",
    "Shaimaa Salah",
  ]

}
