import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ruta } from '../modelo/ruta';
import { Dia } from '../modelo/dia';
@Injectable({
  providedIn: 'root'
})
export class RutaService {

  urlBase: String = 'http://localhost:8080/public'

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

  descargarRutas(){
    return this.get<Ruta[]>(this.urlBase+"/routeList");
  }

  descargarDias(){
    return this.get<Dia[]>('http://localhost:8080/administrador/diaList');
  }

  descargarRutasPublic(){
    return this.get<Ruta[]>('http://localhost:8080/public/routeList');
  }

  buscarPorId(id: number){
    return this.get<Ruta>(this.urlBase+"/route/view/"+id);

  }

  crearRuta(ruta: Ruta){
    return this.post<Ruta>('http://localhost:8080/administrador/route/create',ruta)
  }

  eliminarRuta(id: number){
    return this.delete<Ruta>('http://localhost:8080/administrador/route/delete/'+id);
  }
  editarRuta(ruta:Ruta){
    return this.put<Ruta>('http://localhost:8080/administrador/route/edit/'+ruta.id,ruta);
  }
}
