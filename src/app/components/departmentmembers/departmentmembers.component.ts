import { Component } from '@angular/core';

@Component({
  selector: 'app-departmentmembers',
  templateUrl: './departmentmembers.component.html',
  styleUrls: ['./departmentmembers.component.css']
})
export class DepartmentmembersComponent {
  memberssrcs:string[]=[
    "./assets/dr rania.png",
    "./assets/badawy2jpg.jpg",
    "./assets/mohanad3.jpg",
    "./assets/mahalawy.jpg",
    "./assets/shimaa.jpg",
    "./assets/noone2.jpg",
    "./assets/image 280.png",
    "./assets/omar.png",

  ]
  Departmentmembername:string[]=[
    "Rania ElGohary",
    "Mohamed Badawi",
    "Mohannad Deif",
    "Mohamed ElMahalawy",
    "Shimaa Bahaa",
    "Mariam Faried",
    "Mariam Essam",
    "Mohamed Omar",
  ]
  link:string[]=[
    "/departmentmember",
    "/drprofile",
    "/departmentmember",
    "/departmentmember",
    "/departmentmember",
    "/departmentmember",
    "/departmentmember",
    "/departmentmember",
  ]
  AssistentOrDr:string[]=[
    "Professor",
    "Professor",
    "Professor",
    "Professor",
    "Assistant",
    "Assistant",
    "Assistant",
    "Assistant",
  ]

}
