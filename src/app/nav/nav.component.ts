import { Component, OnInit } from '@angular/core';
import { AuthService } from './../user/auth.service'
import { ISession, EventService } from '../event-list/shared';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  searchTerm: string = '';
  foundSessions: ISession[];

  constructor(public auth: AuthService, private eventService: EventService) { }

  ngOnInit(): void {
  }


  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      // console.log(this.foundSessions);
    });
  }

}
