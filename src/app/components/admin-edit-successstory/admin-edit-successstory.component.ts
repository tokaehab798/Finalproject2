import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-edit-successstory',
  templateUrl: './admin-edit-successstory.component.html',
  styleUrls: ['./admin-edit-successstory.component.css']
})
export class AdminEditSuccessstoryComponent {
  competitionDetails = {
    title: 'AWS Climathon hackathon Competition',
    award: '1st place',
    description: `The AWS Climathon hackathon held in 2022 at Misr University in Egypt provided a platform for passionate innovators...`
  };

  // Data for project images
  projectImages = [
    '../../../assets/project1.png',
    '../../../assets/project2.png',
    '../../../assets/project3.png'
    // Add more project image URLs as needed
  ];

  // Data for team members
  teamMembers = [
    { name: 'John Doe', role: 'Student', image: '../../../assets/usama2.jpg' },
    { name: 'Jane Smith', role: 'Student', image: '../../../assets/ezz.jpg' },
  
    // Add more team member data as needed
  ];


}
