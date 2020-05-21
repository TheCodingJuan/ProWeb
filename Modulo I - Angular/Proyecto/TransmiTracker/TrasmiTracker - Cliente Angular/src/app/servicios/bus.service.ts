import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Bus } from '../modelo/bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {

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

  descargarBuses() {
    return this.get<Bus[]>(this.urlBase + '/busList');
  }

  descargarBusesAdmin(){
    return this.get<Bus[]>('http://localhost:8080/administrador/busList')
  }

  buscarPorId(id: number) {
    return this.get<Bus>(this.urlBase + '/bus/view/' + id);
  }

  crearBus(bus: Bus) {
    return this.post<Bus>(this.urlBase + '/bus/create', bus);
  }
  editarBus(bus: Bus) {
    return this.put<Bus>(this.urlBase + '/bus/edit/' + bus.id, bus);
  }
  eliminarBus(id: number) {
    return this.delete<Bus>(this.urlBase + '/bus/delete/' + id);
  }
}
