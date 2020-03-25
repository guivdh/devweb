import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { EventRandom } from '../../event';
import { UserRandom } from '../../user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrlEvent = 'http://localhost:3000/evenement';

const apiUrlUser = 'http://localhost:3000/utilisateur';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }


  //User CRUD

  getUsers(): Observable<UserRandom[]> {
    return this.http.get<UserRandom[]>(apiUrlUser)
      .pipe(
        tap(UserRandom => console.log('fetched Users')),
        catchError(this.handleError('getUsers', []))
      );
  }
  
  getUser(id: any): Observable<UserRandom> {
    const url = `${apiUrlUser}/${id}`;
    return this.http.get<UserRandom>(url).pipe(
      tap(_ => console.log(`fetched User id=${id}`)),
      catchError(this.handleError<UserRandom>(`getUser id=${id}`))
    );
  }
  
  addUser(user: UserRandom): Observable<UserRandom> {
    return this.http.post<UserRandom>(apiUrlUser, user, httpOptions).pipe(
      tap((prod: UserRandom) => console.log(`added User w/ id=${prod.matricule}`)),
      catchError(this.handleError<UserRandom>('addUser'))
    );
  }
  
  updateUser(id: any, user: any): Observable<any> {
    const url = `${apiUrlUser}/${id}`;
    return this.http.put(url, user, httpOptions).pipe(
      tap(_ => console.log(`updated UserRandom id=${id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }
  
  deleteUser(id: any): Observable<UserRandom> {
    const url = `${apiUrlUser}/${id}`;
  
    return this.http.delete<UserRandom>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted User id=${id}`)),
      catchError(this.handleError<UserRandom>('deleteUser'))
    );
  }





  //Event CRUD
  getEvents(): Observable<EventRandom[]> {
    return this.http.get<EventRandom[]>(apiUrlEvent)
      .pipe(
        tap(EventRandom => console.log('fetched Events')),
        catchError(this.handleError('getEvents', []))
      );
  }
  
  getEvent(id: any): Observable<EventRandom> {
    const url = `${apiUrlEvent}/${id}`;
    return this.http.get<EventRandom>(url).pipe(
      tap(_ => console.log(`fetched Event id=${id}`)),
      catchError(this.handleError<EventRandom>(`getEvent id=${id}`))
    );
  }
  
  addEvent(event: EventRandom): Observable<EventRandom> {
    return this.http.post<EventRandom>(apiUrlEvent, event, httpOptions).pipe(
      tap((prod: EventRandom) => console.log(`added Event w/ id=${prod._id}`)),
      catchError(this.handleError<EventRandom>('addEvent'))
    );
  }
  
  updateEvent(id: any, event: any): Observable<any> {
    const url = `${apiUrlEvent}/${id}`;
    return this.http.put(url, event, httpOptions).pipe(
      tap(_ => console.log(`updated EventRandom id=${id}`)),
      catchError(this.handleError<any>('updateEvent'))
    );
  }
  
  deleteEvent(id: any): Observable<EventRandom> {
    const url = `${apiUrlEvent}/${id}`;
  
    return this.http.delete<EventRandom>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Event id=${id}`)),
      catchError(this.handleError<EventRandom>('deleteEvent'))
    );
  }






  
}
