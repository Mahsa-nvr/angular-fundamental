import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { EventService } from "./../../shared/event.service";

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router){

  }

  canActivate( route: ActivatedRouteSnapshot){
    const eventExists = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExists) {
      // tslint:disable-next-line: semicolon
      this.router.navigate(['/404'])
    }
      // tslint:disable-next-line: align
      return eventExists;
  }
}
