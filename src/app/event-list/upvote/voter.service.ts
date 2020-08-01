import { Injectable } from '@angular/core';
import { ISession } from './../shared/event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Subject, Observable, of } from 'rxjs';

@Injectable()
export class VoterService {

  constructor(private http: HttpClient){}
  deleteVoter(eventId: number,  session: ISession, voterName: string){
   session.voters = session.voters.filter(voter => voter !== voterName);

   const url = `http://localhost:8808/api/sessions/${eventId}/sessions/${session.id}/voters/${voterName}`;
   this.http.delete(url)
   .pipe(catchError(this.handleError('addVoter')))
   .subscribe();
  }

  addVoter(eventId: number, session: ISession, voterName: string){
    session.voters.push(voterName);

    const options = { headers: new HttpHeaders({'Content-Type': '/application/json'})};
    const url = `http://localhost:8808/api/sessions/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.post(url, { }, options )
    .pipe(catchError(this.handleError('addVoter')))
    .subscribe();
  }

  // tslint:disable-next-line: typedef-whitespace
  private handleError<T>(operation = 'operation', result ? : T) {
    return (error: any): Observable<T> => {
    console.error(error);
    return of(result as T);
    };
  }

  userHasVoted(session: ISession, voterName: string){
    return session.voters.some(voter => voter === voterName);
  }
}
