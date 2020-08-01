import { Component, OnInit } from '@angular/core';
import { EventService } from './../../shared/event.service';
import { ActivatedRoute , Params} from '@angular/router';
import { IEvent, ISession } from './../../shared/index';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
   event: IEvent;
   addMode: boolean;
   filterBy: string = 'all';
   sortBy: string = 'votes';

  constructor(private eventService: EventService , private route: ActivatedRoute) { }
// before recived api
  // ngOnInit(): void {
  //   this.route.params.forEach((params: Params) => {
  //   this.event = this.eventService.getEvent(+params['id']);
  //   this.addMode = false;
  //   });
    // this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  // }


  ngOnInit() {
    this.route.data.forEach((data) => {

      this.event = data['event'];
      this.addMode = false;
      // this.eventService.getEvent(+params['id']).subscribe((event: IEvent) => {
      //   this.event = event;
      //   this.addMode = false;
      // });
    });
  }

  addSession(){
    this.addMode = true;
  }

  saveNewSession(session: ISession){
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelAddSession(){
    this.addMode = false;
  }

}
