import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  flag:boolean=true;
  modelImag:string='';
  srcsofdepartment:string[]=[
"./assets/ranyamorba3.jpg",
"./assets/badawy2jpg.jpg",
"./assets/mohanad3.jpg",

  ]
tittlesNames:string[]=[
  "Prof/Rania El Gohary",
  "Prof/Mohamed Badawi",
  "Prof/Mohannad Deif"
]
srcsofprojects:string[]=[
  "./assets/project4.png",
  "./assets/project2.png",
  "./assets/trashvision.jpg"
]
projectsNames:string[]=[
  "Automated Fruit Harvesting ",
  "Face recognition",
  "Trash vision"
]
link:string[]=[
  "/departmentmember",
  "/drprofile",
  "/departmentmember",]

}
