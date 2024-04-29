import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-departmentmember',
  templateUrl: './departmentmember.component.html',
  styleUrls: ['./departmentmember.component.css']
})
export class DepartmentmemberComponent implements OnInit {
  showImageFlag: boolean = false;
  showSubjectsFlag: boolean = true; // Set to true to show by default
  showHistoryFlag: boolean = false;
  activeTab: string = 'subjects'; // Set active tab to 'subjects' by default

  ngOnInit(): void {
    // Ensure that only subjects tab is active when the component initializes
    this.showImageFlag = false;
    this.showHistoryFlag = false;
  }

  showImage() {
    this.showImageFlag = true;
    this.showSubjectsFlag = false;
    this.showHistoryFlag = false;
    this.activeTab = 'image'; // Set active tab
  }

  showSubjects() {
    this.showImageFlag = false;
    this.showSubjectsFlag = true;
    this.showHistoryFlag = false;
    this.activeTab = 'subjects'; // Set active tab
  }

  showHistory() {
    this.showImageFlag = false;
    this.showSubjectsFlag = false;
    this.showHistoryFlag = true;
    this.activeTab = 'history'; // Set active tab
  }
}
