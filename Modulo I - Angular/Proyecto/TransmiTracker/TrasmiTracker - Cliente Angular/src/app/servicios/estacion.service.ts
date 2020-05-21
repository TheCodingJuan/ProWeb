import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Estacion } from '../modelo/estacion';

@Injectable({
  providedIn: 'root'
})
export class EstacionService {

  urlBase: String = 'http://localhost:8080/public';

  constructor(
    private http: HttpClient
  ) { }

  private handleError(error: HttpErrorResponse) : Observable<any>{
    console.log(error);
    return  throwError("An error has ocurred");
  }

  private get<T>(url): Observable<T> {
    console.log('get:', url);
    return this.http.get<T>(url, {withCredentials: true}).pipe(
      // retry(5),
      catchError(this.handleError)
    );
  }

  private post<T>(url, data: T): Observable<T> {
    console.log('post:', url);
    return this.http
      .post<T>(url, data, {withCredentials: true,
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }
  private put<T>(url, data: T): Observable<T> {
    console.log('put:', url);
    return this.http.put<T>(url, data, {withCredentials: true}).pipe(
      // retry(5),
      catchError(this.handleError)
    );
  }
  private delete<T>(url): Observable<T> {
    console.log('delete:', url);
    return this.http.delete<T>(url, {withCredentials: true}).pipe(
      // retry(5),
      catchError(this.handleError)
    );
  }

  descargarEstaciones(){
    return this.get<Estacion[]>('http://localhost:8080/administrador/estacionList');
  }
}
