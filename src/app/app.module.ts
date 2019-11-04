import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManageCustomersComponent } from './view/manage-customers/manage-customers.component';
import { ManageServicesComponent } from './view/manage-services/manage-services.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'customers',
    component: ManageCustomersComponent
  },
  {
    path: 'services',
    component : ManageServicesComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
];





@NgModule({
  declarations: [
    AppComponent,
    ManageCustomersComponent,
    ManageServicesComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
