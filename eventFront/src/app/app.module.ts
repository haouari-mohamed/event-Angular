import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/User/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { EventListComponent } from './components/User/dashboard/events/event-list/event-list.component';
import { ReservationListComponent } from './components/User/dashboard/reservations/reservation-list/reservation-list.component';
import { EventSearchComponent } from './components/User/dashboard/search/event-search/event-search.component';
import { HeaderComponent } from './components/User/dashboard/layout/header/header.component';
import { FooterComponent } from './components/User/dashboard/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AdminComponent,
    EventListComponent,
    ReservationListComponent,
    EventSearchComponent,
    HeaderComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterComponent
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
