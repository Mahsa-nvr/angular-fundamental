import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-list/event-details/event-details/event-details.component'
import { CreateEventComponent } from '././event-list/shared/create-event/create-event.component'
import { Error404Component } from './error404/error404.component';
import { EventRouteActivator } from './event-list/event-details/event-details/event-route-activator.service'
import { EventListResolver } from './event-list/event-list-resolver.service';
import { LoginComponent } from './user/login.component';
import { ProfileComponent } from './user/profile.component';
import { CreateSessionComponent } from './event-list/event-details/event-details/create-session/create-session.component'
import { EventResolver } from './event-list/event-resolver.service';

const routes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events' , component: EventListComponent,  resolve: {events: EventListResolver} },
  // {path: 'events/:id' , component: EventDetailsComponent , canActivate: [EventRouteActivator]},
  // tslint:disable-next-line: whitespace
  {path: 'events/:id' , component: EventDetailsComponent , resolve:{event: EventResolver}},
  {path: 'user/login' , component: LoginComponent},
  {path: 'user/profile' , component: ProfileComponent},
  {path: 'events/session/new', component: CreateSessionComponent},
  {path: '404', component: Error404Component },
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'user', loadChildren: './user/user.module#UserModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
