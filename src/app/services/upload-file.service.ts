import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { IformData } from '../models/iform-data';

@Injectable({
  providedIn: 'root',
})
export class UploadFileService {
  private baseUrl = '/api';


  constructor(private http: HttpClient) {

  }

  //TODO: HTTP GET
  getAllData(): Observable<IformData[]> {
    return this.http.get<IformData[]>(`${this.baseUrl}/files`);
  }

  public getPosts(id): Observable<IformData[]> {
    return this.http.get<IformData[]>(`${this.baseUrl}/files/${id}`);
  }

  //TODO: HTTP POST
  PostInfo(form_info: FormData): Observable<HttpEvent<any>> {
    return this.http
      .post(`${this.baseUrl}/upload`, form_info, {
        responseType: 'json',
        reportProgress: true,
        observe: 'events',
      })
      .pipe(
        catchError((error) => {
          console.log('error en el servicio: ' + error.error.message);
          return throwError(error);
        })
      );
  }

  //TODO: HTTP POST by ID (ACTUALIZAR)
  PostEditInfo(form_info: FormData, id: String): Observable<HttpEvent<any>> {
    return this.http.post(`${this.baseUrl}/edit/${id}/file`, form_info, {
      responseType: 'json',
      reportProgress: true,
      observe: 'events',
    });
  }

  //TODO: HTTP DELETE
  deleteData(id) {
    return this.http.delete(`${this.baseUrl}/delete-img/${id}`, {
      responseType: 'json',
      observe: 'body',
    });
  }
}
