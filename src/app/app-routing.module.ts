import { AdmineditprojectComponent } from './components/admineditproject/admineditproject.component';
import { AdminExternaltrainingComponent } from './components/admin-externaltraining/admin-externaltraining.component';
import { AdminInternaltrainingComponent } from './components/admin-internaltraining/admin-internaltraining.component';
import { AdminEditSuccessstoryComponent } from './components/admin-edit-successstory/admin-edit-successstory.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HomeComponent } from './components/home/home.component';
import { DepartmentmembersComponent } from './components/departmentmembers/departmentmembers.component';
import { DepartmentmemberComponent } from './components/departmentmember/departmentmember.component';
import { SuccessstoriesComponent } from './components/successstories/successstories.component';
import { SuccessstoryComponent } from './components/successstory/successstory.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { StudyplanComponent } from './components/studyplan/studyplan.component';
import { TrainingComponent } from './components/training/training.component';
import { InternaltrainingComponent } from './components/internaltraining/internaltraining.component';
import { ExternaltrainingComponent } from './components/externaltraining/externaltraining.component';
import { TrainingexternalComponent } from './components/trainingexternal/trainingexternal.component';
import { FormComponent } from './components/form/form.component';
import { DrformComponent } from './components/drform/drform.component';
import { DrprofileComponent } from './components/drprofile/drprofile.component';
import { LoginComponent } from './components/login/login.component';
import { AdminformComponent } from './components/adminform/adminform.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdminsuccessstoriesComponent } from './components/adminsuccessstories/adminsuccessstories.component';
import { AdminsuccessstoryComponent } from './components/adminsuccessstory/adminsuccessstory.component';
import { AdminCompetitionsComponent } from './components/admin-competitions/admin-competitions.component';
import { AdminCompetitionComponent } from './components/admin-competition/admin-competition.component';
import { AdminEditCompetitionComponent } from './components/admin-edit-competition/admin-edit-competition.component';
import { AdminTrainingComponent } from './components/admin-training/admin-training.component';
import { AdminEditInternaltrainingComponent } from './components/admin-edit-internaltraining/admin-edit-internaltraining.component';
import { AdminTrainingexternalComponent } from './components/admin-trainingexternal/admin-trainingexternal.component';
import { AdminEditExternaltrainingComponent } from './components/admin-edit-externaltraining/admin-edit-externaltraining.component';
import { AdminprojectsComponent } from './components/adminprojects/adminprojects.component';
import { AdminprojectComponent } from './components/adminproject/adminproject.component';
import { AdminstudyplanComponent } from './components/adminstudyplan/adminstudyplan.component';
import { AdmineditstudyplanComponent } from './components/admineditstudyplan/admineditstudyplan.component';
import { AdminaboutComponent } from './components/adminabout/adminabout.component';
import { AdmineditaboutComponent } from './components/admineditabout/admineditabout.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { DrhomeComponent } from './components/drhome/drhome.component';
import { DrsuccessstoriesComponent } from './components/drsuccessstories/drsuccessstories.component';
import { DrsuccessstoryComponent } from './components/drsuccessstory/drsuccessstory.component';
import { DrprojectsComponent } from './components/drprojects/drprojects.component';
import { DrprojectComponent } from './components/drproject/drproject.component';
import { DrcompetitionsComponent } from './components/drcompetitions/drcompetitions.component';
import { DrcompetitionComponent } from './components/drcompetition/drcompetition.component';
import { DrtrainingComponent } from './components/drtraining/drtraining.component';
import { DrinternaltrainingComponent } from './components/drinternaltraining/drinternaltraining.component';
import { DrexternaltrainingComponent } from './components/drexternaltraining/drexternaltraining.component';
import { DrtrainingexternalComponent } from './components/drtrainingexternal/drtrainingexternal.component';
import { DrstudyplanComponent } from './components/drstudyplan/drstudyplan.component';
import { DrdepartmentmembersComponent } from './components/drdepartmentmembers/drdepartmentmembers.component';
import { DraboutComponent } from './components/drabout/drabout.component';
import { AdmindepartmentmembersComponent } from './components/admindepartmentmembers/admindepartmentmembers.component';
import { DrdepartmentmemberComponent } from './components/drdepartmentmember/drdepartmentmember.component';
import { DreditdepartmentmemberComponent } from './components/dreditdepartmentmember/dreditdepartmentmember.component';

const routes: Routes = [
  { path: '', redirectTo: '/authlayout/login', pathMatch: 'full' },
  { path: 'doctorlayout', component:DoctorLayoutComponent ,
    children:[
      {path:'', redirectTo:'drhome',pathMatch:'full'},
      {path:'drhome', component:DrhomeComponent, title:'HomePage'},
      {path:'drabout', component:DraboutComponent, title:'DrProfilePage'},
      {path:'drform', component:DrformComponent, title:'FormPage'},
      {path:'drprofile', component:DrprofileComponent, title:'DrProfilePage'},
      {path:'drsuccessstories', component:DrsuccessstoriesComponent, title:'drsuccessstories'},
      {path:'drsuccessstory', component:DrsuccessstoryComponent, title:'drsuccessstory'},
      {path:'drprojects', component:DrprojectsComponent, title:'drprojects'},
      {path:'drproject', component:DrprojectComponent, title:'drproject'},
      {path:'drcompetitions', component:DrcompetitionsComponent, title:'drcompetitions'},
      {path:'drcompetition', component:DrcompetitionComponent, title:'drcompetition'},
      {path:'drtraining', component:DrtrainingComponent, title:'drtraining'},
      {path:'drinternaltraining', component:DrinternaltrainingComponent, title:'drinternaltraining'},
      {path:'drexternaltraining', component:DrexternaltrainingComponent, title:'drexternaltraining'},
      {path:'drtrainingexternal', component:DrtrainingexternalComponent, title:'drtrainingexternal'},
      {path:'drstudyplan', component:DrstudyplanComponent, title:'Drstudyplan'},
      {path:'drdepartmentmembers', component:DrdepartmentmembersComponent, title:'drdepartmentmembers'},
      {path:'drdepartmentmember', component:DrdepartmentmemberComponent, title:'drdepartmentmember'},
      {path:'dreditdepartmentmember', component:DreditdepartmentmemberComponent, title:'dreditdepartmentmember'},


      {path:'**', component: NotfoundComponent, title:'NotFoundPage'},
    ]
   },
  { path: 'studentlayout', component: StudentLayoutComponent ,
  children: [

   
{path:'', redirectTo:'home',pathMatch:'full'},
{path:'home', component:HomeComponent, title:'HomePage'},
{path:'about', component:AboutComponent, title:'AboutPage'},
{path:'departmentmembers', component:DepartmentmembersComponent, title:'DepartmentMembersPage'},
{path:'departmentmember',component:DepartmentmemberComponent,title:'DrProfilePage'},
{path:'sucessstories', component:SuccessstoriesComponent,title:"successstories"},
{path:'successstory', component:SuccessstoryComponent, title:'successstoryPage'},
{path:'projects', component:ProjectsComponent, title:'ProjectsPage'},
{path:'project', component:ProjectComponent, title:'ProjectPage'},
{path:'competitions', component:CompetitionsComponent, title:'CompetitionsPage'},
{path:'competition', component:CompetitionComponent, title:'CompetitionPage'},
{path:'training', component:TrainingComponent, title:'TrainingPage'},
{path:'internaltraining', component:InternaltrainingComponent, title:'InternalTrainingPage'},
{path:'studyplan', component:StudyplanComponent, title:'studyplanPage'},
{path:'trainingexternal',component:ExternaltrainingComponent,title:'ExternalTrainingPagePage'},
{path:'externaltraining', component:TrainingexternalComponent, title:'ExternalTrainingPage'},
{path:'form', component:FormComponent, title:'FormPage'},
{path:'**', component: NotfoundComponent, title:'NotFoundPage'}
  ]
  },
  { path: 'adminlayout', component: AdminLayoutComponent ,
    children:[
      {path:'', redirectTo:'adminhome',pathMatch:'full'},
      {path:'adminhome', component:AdminhomeComponent, title:'HomePage'},
      {path:'adminform', component:AdminformComponent, title:'FormPage'},
      {path:'adminsuccessstories', component:AdminsuccessstoriesComponent,title:"adminsuccessstories"},
      {path:'adminsuccessstory', component:AdminsuccessstoryComponent, title:'adminsuccessstory'},
      {path:'admineditsuccesstory', component:AdminEditSuccessstoryComponent, title:'AdminEditSuccessStory'},
      {path:'admincompetitions', component:AdminCompetitionsComponent, title:'admincompetitions'},
      {path:'admincompetition', component:AdminCompetitionComponent, title:'admincompetition'},
      {path:'admineditcompetition', component:AdminEditCompetitionComponent, title:'admineditcompetitions'},
      {path:'admintraining', component:AdminTrainingComponent, title:'admintraining'},
      {path:'admininternaltraining', component:AdminInternaltrainingComponent, title:'admininternaltraining'},
      {path:'admineditinternaltraining', component:AdminEditInternaltrainingComponent, title:'admineditinternaltraining'},
      {path:'admintrainingexternal', component:AdminTrainingexternalComponent, title:'admintrainingexternal'},
      {path:'adminexternaltraining', component:AdminExternaltrainingComponent, title:'adminexternaltraining'},
      {path:'admineditexternaltraining', component:AdminEditExternaltrainingComponent, title:'admineditexternaltraining'},
      {path:'adminprojects', component:AdminprojectsComponent, title:'adminprojects'},
      {path:'adminproject', component:AdminprojectComponent, title:'adminproject'},
      {path:'admineditproject', component:AdmineditprojectComponent, title:'admineditproject'},
      {path:'adminstudyplan', component:AdminstudyplanComponent, title:'adminstudyplan'},
      {path:'admineditstudyplan', component:AdmineditstudyplanComponent, title:'admineditstudyplan'},
      {path:'adminabout', component:AdminaboutComponent, title:'adminabout'},
      {path:'admineditabout', component:AdmineditaboutComponent, title:'admineditabout'},
      {path:'admindepartmentmember', component:AdmindepartmentmembersComponent, title:'admindepartmentmember'},
      {path:'**', component: NotfoundComponent, title:'NotFoundPage'}



    ]
  },
  { path: 'authlayout', component: AuthLayoutComponent ,
    children:[
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      {path:'**', component: NotfoundComponent, title:'NotFoundPage'}
    ]
   },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
