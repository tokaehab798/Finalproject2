import { Component } from '@angular/core';

@Component({
  selector: 'app-drtraining',
  templateUrl: './drtraining.component.html',
  styleUrls: ['./drtraining.component.css']
})
export class DrtrainingComponent {
  srcsoftraining:string[]=[
    "./assets/embedded.png",
    "./assets/machinelearning.jpeg",
    "./assets/datascience.png",
  ]
  trainingtittle:string[]=[
    "Embedded System",
    "Machine Learning",
    "Data Science",
  ]
  trainingdescription:string[]=[
    "Compact computing systems for specific tasks with real-time constraints.",
    "AI subset enabling computers to learn from data for predictions.",
    " Extracting insights from data using scientific methods and algorithms."
  ]

}
