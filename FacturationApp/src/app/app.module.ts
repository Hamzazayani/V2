

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TableManagmentComponent } from './table-managment/table-managment.component';
import { CommandComponent } from './command/command.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { StatsComponent } from './stats/stats.component';
import { NgChartsModule } from 'ng2-charts';
import { HistoricComponent } from './historic/historic.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { MatDialogModule } from '@angular/material/dialog';



const routes: Routes = [{ path: 'home', component: HomeComponent },
{ path: '', component: LoginComponent }, { path: 'tableManagment', component: TableManagmentComponent},
{ path: 'command/:id/:status', component: CommandComponent},{ path: 'invoice', component: InvoiceComponent},
{ path: 'historic', component: HistoricComponent },

];
  // Add more routes as needed


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TableManagmentComponent,
    CommandComponent,
    InvoiceComponent,
    StatsComponent,
    HistoricComponent,
    InvoiceDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule, RouterModule.forRoot(routes),
    NgChartsModule, MatDialogModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
