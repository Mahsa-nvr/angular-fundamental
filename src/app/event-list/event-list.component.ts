import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { IEvent } from '././shared/event.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
event: any;
  constructor(private eventService: EventService , private route: ActivatedRoute ) {

   }

  ngOnInit(): void {
    // this.eventService.getEvents().subscribe(events => {this.event = events})

    this.event = this.route.snapshot.data['events']

  }




}
