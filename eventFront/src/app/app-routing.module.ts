import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/User/dashboard/dashboard.component";
import {AdminComponent} from "./components/admin/admin.component";
import { EventListComponent } from './components/User/dashboard/events/event-list/event-list.component';
import { ReservationListComponent } from './components/User/dashboard/reservations/reservation-list/reservation-list.component';
import { ContactComponent } from './components/User/dashboard/contact/contact.component';
import { LogoutComponent } from './components/logout/logout.component';


const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/dashboard', component: DashboardComponent },
  { path: 'admin/dashboard', component: AdminComponent },
  {path :'events', component: EventListComponent},
  {path: 'book', component: ReservationListComponent},
  {path: 'contact', component : ContactComponent},
  {path: 'logout', component : LogoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
