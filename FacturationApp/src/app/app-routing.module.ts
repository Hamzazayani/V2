import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { TableManagmentComponent } from './table-managment/table-managment.component';
import { CommandComponent } from './command/command.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'tableManagment', component: TableManagmentComponent},
  { path: 'command', component: CommandComponent},

  { path: 'login', component:LoginComponent ,  },
  { path: '', redirectTo: '/' },
  {path: "", component: AppComponent, pathMatch: 'full'},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
