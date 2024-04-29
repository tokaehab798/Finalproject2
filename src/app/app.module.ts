import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import{HttpClientModule}from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DepartmentmembersComponent } from './components/departmentmembers/departmentmembers.component';
import { SuccessstoriesComponent } from './components/successstories/successstories.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { TrainingComponent } from './components/training/training.component';
import { StudyplanComponent } from './components/studyplan/studyplan.component';
import { SuccessstoryComponent } from './components/successstory/successstory.component';
import { InternaltrainingComponent } from './components/internaltraining/internaltraining.component';
import { ExternaltrainingComponent } from './components/externaltraining/externaltraining.component';
import { TrainingexternalComponent } from './components/trainingexternal/trainingexternal.component';
import { DepartmentmemberComponent } from './components/departmentmember/departmentmember.component';
import { AdminformComponent } from './components/adminform/adminform.component';
import { FormComponent } from './components/form/form.component';
import { DrformComponent } from './components/drform/drform.component';
import { DrprofileComponent } from './components/drprofile/drprofile.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminsuccessstoriesComponent } from './components/adminsuccessstories/adminsuccessstories.component';
import { AdminnavComponent } from './components/adminnav/adminnav.component';
import { AdminsuccessstoryComponent } from './components/adminsuccessstory/adminsuccessstory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminEditSuccessstoryComponent } from './components/admin-edit-successstory/admin-edit-successstory.component';
import { AdminEditCompetitionComponent } from './components/admin-edit-competition/admin-edit-competition.component';
import { AdminCompetitionComponent } from './components/admin-competition/admin-competition.component';
import { AdminCompetitionsComponent } from './components/admin-competitions/admin-competitions.component';
import { AdminTrainingComponent } from './components/admin-training/admin-training.component';
import { AdminInternaltrainingComponent } from './components/admin-internaltraining/admin-internaltraining.component';
import { AdminEditInternaltrainingComponent } from './components/admin-edit-internaltraining/admin-edit-internaltraining.component';
import { AdminTrainingexternalComponent } from './components/admin-trainingexternal/admin-trainingexternal.component';
import { AdminExternaltrainingComponent } from './components/admin-externaltraining/admin-externaltraining.component';
import { AdminEditExternaltrainingComponent } from './components/admin-edit-externaltraining/admin-edit-externaltraining.component';
import { AdminstudyplanComponent } from './components/adminstudyplan/adminstudyplan.component';
import { AdminprojectsComponent } from './components/adminprojects/adminprojects.component';
import { AdminprojectComponent } from './components/adminproject/adminproject.component';
import { AdmineditprojectComponent } from './components/admineditproject/admineditproject.component';
import { AdmineditstudyplanComponent } from './components/admineditstudyplan/admineditstudyplan.component';
import { AdminaboutComponent } from './components/adminabout/adminabout.component';
import { AdmineditaboutComponent } from './components/admineditabout/admineditabout.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { DrnavbarComponent } from './components/drnavbar/drnavbar.component';
import { DrhomeComponent } from './components/drhome/drhome.component';
import { DrsuccessstoriesComponent } from './components/drsuccessstories/drsuccessstories.component';
import { DrsuccessstoryComponent } from './components/drsuccessstory/drsuccessstory.component';
import { DrcompetitionsComponent } from './components/drcompetitions/drcompetitions.component';
import { DrcompetitionComponent } from './components/drcompetition/drcompetition.component';
import { DrprojectsComponent } from './components/drprojects/drprojects.component';
import { DrprojectComponent } from './components/drproject/drproject.component';
import { DrstudyplanComponent } from './components/drstudyplan/drstudyplan.component';
import { DraboutComponent } from './components/drabout/drabout.component';
import { DrdepartmentmembersComponent } from './components/drdepartmentmembers/drdepartmentmembers.component';
import { DrdepartmentmemberComponent } from './components/drdepartmentmember/drdepartmentmember.component';
import { DrinternaltrainingComponent } from './components/drinternaltraining/drinternaltraining.component';
import { DrtrainingComponent } from './components/drtraining/drtraining.component';
import { DrexternaltrainingComponent } from './components/drexternaltraining/drexternaltraining.component';
import { DrtrainingexternalComponent } from './components/drtrainingexternal/drtrainingexternal.component';
import { AdmindepartmentmembersComponent } from './components/admindepartmentmembers/admindepartmentmembers.component';
import { DreditdepartmentmemberComponent } from './components/dreditdepartmentmember/dreditdepartmentmember.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    StudentLayoutComponent,
    DoctorLayoutComponent,
    AdminLayoutComponent,
    HomeComponent,
    AboutComponent,
    DepartmentmembersComponent,
    SuccessstoriesComponent,
    LoginComponent,
    ProjectComponent,
    ProjectsComponent,
    CompetitionComponent,
    CompetitionsComponent,
    TrainingComponent,
    StudyplanComponent,
    SuccessstoryComponent,
    InternaltrainingComponent,
    ExternaltrainingComponent,
    TrainingexternalComponent,
    DepartmentmemberComponent,
    AdminformComponent,
    FormComponent,
    DrformComponent,
    DrprofileComponent,
    NotfoundComponent,
    NavbarComponent,
    FooterComponent,
    AdminsuccessstoriesComponent,
    AdminnavComponent,
    AdminsuccessstoryComponent,
    AdminEditSuccessstoryComponent,
    AdminEditCompetitionComponent,
    AdminCompetitionComponent,
    AdminCompetitionsComponent,
    AdminTrainingComponent,
    AdminInternaltrainingComponent,
    AdminEditInternaltrainingComponent,
    AdminTrainingexternalComponent,
    AdminExternaltrainingComponent,
    AdminEditExternaltrainingComponent,
    AdminstudyplanComponent,
    AdminprojectsComponent,
    AdminprojectComponent,
    AdmineditprojectComponent,
    AdmineditstudyplanComponent,
    AdminaboutComponent,
    AdmineditaboutComponent,
    AdminhomeComponent,
    DrnavbarComponent,
    DrhomeComponent,
    DrsuccessstoriesComponent,
    DrsuccessstoryComponent,
    DrcompetitionsComponent,
    DrcompetitionComponent,
    DrprojectsComponent,
    DrprojectComponent,
    DrstudyplanComponent,
    DraboutComponent,
    DrdepartmentmembersComponent,
    DrdepartmentmemberComponent,
    DrinternaltrainingComponent,
    DrtrainingComponent,
    DrexternaltrainingComponent,
    DrtrainingexternalComponent,
    AdmindepartmentmembersComponent,
    DreditdepartmentmemberComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
