import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Conductor } from '../modelo/conductor';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  urlBase: String = 'http://localhost:8080/coordinador';

  constructor(
    private http: HttpClient
  ) { }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return  throwError('An error has ocurred');
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

  descargarConductores() {
    return this.get<Conductor[]>(this.urlBase + '/driveList');
  }
  buscarPorId(id: number) {
    return this.get<Conductor>(this.urlBase + '/driver/view/' + id);
  }

  crearConductor(conductor: Conductor) {
    return this.post<Conductor>(this.urlBase + '/driver/create', conductor);
  }
  editarConductor(conductor: Conductor) {
    return this.put<Conductor>(this.urlBase + '/driver/edit/' + conductor.id, conductor);
  }
  eliminarConductor(id: number) {
    return this.delete<Conductor>(this.urlBase + '/driver/delete/' + id);
  }
}
