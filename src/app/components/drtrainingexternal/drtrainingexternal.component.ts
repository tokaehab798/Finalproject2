import { Component } from '@angular/core';

@Component({
  selector: 'app-drtrainingexternal',
  templateUrl: './drtrainingexternal.component.html',
  styleUrls: ['./drtrainingexternal.component.css']
})
export class DrtrainingexternalComponent {
  srcsofextraining:string[]=[
    "./assets/man-using-tablet-work-connect-with-others.jpg",
    "./assets/training1webp.webp",
    
      ]
      externaltrainingname:string[]=[
        "AI & Data Science Python Developer Intern",
    "scholarships from DataCamp",
    
      ]
      externaltrainingdescription:string[]=[
        "Seeking a motivated Data Science  Intern to enhance AI accuracy by training GPT-3 with new data models. Exciting opportunity.",
    "DataCamp, like Coursera, offers 400+ self-paced courses, focusing on comprehensive data skills to train students in the field.",
    
      ]

}
