import { Component } from '@angular/core';

@Component({
  selector: 'app-adminsuccessstories',
  templateUrl: './adminsuccessstories.component.html',
  styleUrls: ['./adminsuccessstories.component.css']
})
export class AdminsuccessstoriesComponent {

 // Define an array to store competition data (dummy data for example)
 competitions: any[] = [
  { id: 1, title: 'AWS Climathon hackathon Competition', place: '1st place', image:  "./assets/competition3.jpg" },

  // Add more competition objects as needed
];

// Method to delete a competition
deleteCompetition(id: number): void {
  // Find the index of the competition with the given ID
  const index = this.competitions.findIndex(comp => comp.id === id);
  // If the competition is found
  if (index !== -1) {
    // Remove the competition from the competitions array
    this.competitions.splice(index, 1);
  }
}}

