import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JQ_TOKEN } from './common/jQuery.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { EventService } from './event-list/shared/event.service';
import { EventDetailsComponent } from './event-list/event-details/event-details/event-details.component';
import { CreateEventComponent } from './event-list/shared/create-event/create-event.component';
import { Error404Component } from './error404/error404.component';
import { EventRouteActivator } from './event-list/event-details/event-details/event-route-activator.service';
import { EventListResolver } from './event-list/event-list-resolver.service';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './user/login.component';
import { ProfileComponent } from './user/profile.component';
import { AuthService } from './user/auth.service';
import { CreateSessionComponent } from './event-list/event-details/event-details/create-session/create-session.component';
import { SessionListComponent } from './event-list/event-details/event-details/session-list/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { DurationPipe } from '././event-list/shared/duration.pipe';
import { TOASTR_TOKEN , Toastr} from './../app/common/toastr.service';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './common/modalTrigger.directive';
import { UpvoteComponent } from './event-list/upvote/upvote.component';
import { VoterService } from './../app/event-list/upvote/voter.service';
import { LocationValidator } from './../../src/app/event-list/shared/location-validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { EventResolver } from './event-list/event-resolver.service';


declare let toastr: Toastr;
const jQuery = window['$']

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    ThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    ProfileComponent,
    LoginComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    ModalTriggerDirective,
    DurationPipe,
    SimpleModalComponent,
    UpvoteComponent,
    LocationValidator,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
  ],
  providers: [
     VoterService,
     EventService,
    //  EventRouteActivator,
     EventResolver,
     EventListResolver,
     AuthService,
     { provide: EventRouteActivator, useClass: EventRouteActivator},
     { provide: TOASTR_TOKEN, useValue: toastr},
     { provide: JQ_TOKEN, useValue: jQuery},
     {
       provide: 'canDeactivateCreateEvent',
       useValue: checkDirtyState
     }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState( component: CreateEventComponent) {
  if (component.isDirty) {
  return window.confirm('do you really want to cancel?');
  }
  // return  true
}
