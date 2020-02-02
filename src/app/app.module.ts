import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { NavigationComponent } from './view/navigation/navigation.component';
import { FooterComponent } from './view/footer/footer.component';
import { AboutPageComponent } from './view/about-page/about-page.component';
import { LoginPageComponent } from './view/login-page/login-page.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SignupPageComponent } from './view/signup-page/signup-page.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProfileComponent } from './view/profile/profile.component';
import { ProNavComponent } from './view/pro-nav/pro-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportTableComponent } from './view/report-table/report-table.component';
import { ConsultaionRoomComponent } from './view/consultaion-room/consultaion-room.component';
import { DoctorListComponent } from './view/doctor-list/doctor-list.component';
import { ChannelPageComponent } from './view/channel-page/channel-page.component';
import { ChannelFormComponent } from './view/channel-form/channel-form.component';
import { OuterReportViewComponent } from './view/outer-report-view/outer-report-view.component';
import { LogAboutComponent } from './view/log-about/log-about.component';
import { AboutBodyComponent } from './view/about-body/about-body.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'consultation-room',
    component: ConsultaionRoomComponent
  },
  {
    path: 'channel',
    component: ChannelPageComponent
  },
  {
    path: 'counsult-status',
    component: OuterReportViewComponent
  },
  {
    path: 'abouts',
    component: LogAboutComponent
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
    DashboardComponent,
    NavigationComponent,
    FooterComponent,
    AboutPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    ProfileComponent,
    ProNavComponent,
    ReportTableComponent,
    ConsultaionRoomComponent,
    DoctorListComponent,
    ChannelPageComponent,
    ChannelFormComponent,
    OuterReportViewComponent,
    LogAboutComponent,
    AboutBodyComponent,
  ],
  entryComponents: [
    LoginPageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
