import { Component } from '@angular/core';

@Component({
  selector: 'app-adminprojects',
  templateUrl: './adminprojects.component.html',
  styleUrls: ['./adminprojects.component.css']
})
export class AdminprojectsComponent {
  srcsofprojects:string[]=[
    "./assets/project4.png",
    "./assets/project1.png",
    "./assets/project2.png",
    "./assets/project7.jpg",
    "./assets/trashvision.jpg",
     "./assets/project8.jpg",
  ]
  projectname:string[]=[
    "Aerated Static composting Device",
    "Line Following Robot",
    "Face Recogentation",
    "Off Road Adventure Robot",
    "Trashvision project",
    "Qvoiding obstacle",
    
  ]

}
