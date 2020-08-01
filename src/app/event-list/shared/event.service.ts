import { Injectable , EventEmitter} from '@angular/core';
import { IEvent, ISession } from './event.model';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable()
export class EventService {
  constructor(private http: HttpClient){

  }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('http://localhost:8808/api/events')
    .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
  }

     // before recived api ----------
    // getEvents(): Subject<IEvent[]> {
    //    const subject = new Subject<IEvent[]>();
    //    setTimeout(() => {subject.next(EVENTS); subject.complete(); }, 100);
    //    return subject;
    // }

    // before recived api ----------
    // getEvent(id: number): IEvent {
    //   return EVENTS.find(event => event.id === id);
    // }


    getEvent(id: number): Observable<IEvent>{
      return this.http.get<IEvent>('http://localhost:8808/api/events/' + id)
    .pipe(catchError(this.handleError<IEvent>('getEvent')));
    }

    // before recived api
    // saveEvent(event){
    //   event.id = 999;
    //   event.session = [];
    //   EVENTS.push(event);
    // }

    saveEvent(event){
      // tslint:disable-next-line: semicolon
      // tslint:disable-next-line: prefer-const
      let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
     // tslint:disable-next-line: align
     return  this.http.post<IEvent>('http://localhost:8808/api/events/', event, options)
      .pipe(catchError(this.handleError<IEvent>('saveEvent')));
    }

    // before recived api
    // updateEvent(event){
    //   const index = EVENTS.findIndex(x => x.id = event.id);
    //   EVENTS[index] = event;
    // }
// tslint:disable-next-line: comment-format
//------------

    // before recived api ;
    // searchSessions(searchTerm: string){
    //   const term = searchTerm.toLocaleLowerCase();
    //   let results: ISession[] = [];

    //   EVENTS.forEach(event => {
    //     let matchingSessions = event.sessions.filter(session =>
    //       session.name.toLocaleLowerCase().indexOf(term) > -1);

    //     matchingSessions = matchingSessions.map((session: any) => {
    //         session.eventId = event.id;
    //         return session;
    //       });
    //     results = results.concat(matchingSessions);
    //   });

    //   const emitter = new EventEmitter(true);
    //   setTimeout(() => {
    //     emitter.emit(results);
    //   }, 100);
    //   return emitter;
    // }

    // tslint:disable-next-line: comment-format
    //------------------

    // tslint:disable-next-line: typedef-whitespace
    private handleError<T>(operation = 'operation', result ? : T) {
      return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
      };
    }

    searchSessions(searchTerm: string): Observable<ISession[]> {
      return this.http.get<ISession[]>('http://localhost:8808/api/sessions/search?search=' + searchTerm)
      .pipe(catchError(this.handleError<ISession[]>('searchSessions')));
    }
}

const EVENTS: IEvent[] = [
    {
        id: 1,
        name: 'Angular Connect',
        date: new Date('9/26/2036'),
        time: '8:00 am',
        price: 599.99,
        imageUrl: '././assets/images/basic-shield.png',
        location: {
          address: '1057 DT',
          city: 'London',
          country: 'England'
        },
      sessions: [
        {
          id: 1,
          name: "Using Angular 4 Pipes",
          presenter: "peter bacon darwin",
          duration: 1,
          level: "Intermedite",
          abstrac: "learn all about the new pipes an aungular",
          voters: ['london', 'spain', 'france', 'rfrf']
        },
        {
          id: 2,
          name: "react",
          presenter: "peter bacon darwin",
          duration: 10,
          level: "advance",
          abstrac: "learn all about the new pipes an aungular",
          voters: ['italy', 'rome', 'paris']
        },
        {
          id: 2,
          name: "vue",
          presenter: "peter bacon darwin",
          duration: 10,
          level: "beginner",
          abstrac: "learn all about the new pipes an aungular",
          voters: ['iran', 'armania', 'bangeladesh', 'tehran', 'shiraz']
        }
      ]
        },
        {
          id: 2,
          name: 'React Connect',
          date: new Date('9/26/2036'),
          time: '10:00 am',
          price: 599.99,
          imageUrl: '././assets/images/basic-shield.png',
          location: {
            address: '6633 DT',
            city: 'spain',
            country: 'England'
          },
        sessions: [
          {
            id: 2,
            name: "Using React 4 Pipes",
            presenter: "peter bacon darwin",
            duration: 2,
            level: "Intermedite",
            abstrac: `learn all about the new pipes an aungular`,
            voters: ['bradgreen', 'igorminar', 'martinfowler']
          }
        ]},
        {
          id: 3,
          name: 'Vue Connect',
          date: new Date('9/26/2036'),
          time: '09:00 am',
          price: 599.99,
          imageUrl: '././assets/images/basic-shield.png',
          location: {
            address: '2278 DT',
            city: 'italy',
            country: 'England'
          },
        sessions: [
          {
            id: 3,
            name: "Using vue 4 Pipes",
            presenter: "peter bacon darwin",
            duration: 3,
            level: "Intermedite",
            abstrac: 'learn all about the new pipes an aungular',
            voters: ['bradgreen', 'igorminar', 'martinfowler']
          }
        ]

        }
];
