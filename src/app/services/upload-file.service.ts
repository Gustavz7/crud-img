import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImgForm } from '../models/img-form';

@Injectable({
  providedIn: 'root',
})
export class UploadFileService {
  constructor(private http: HttpClient) {}
  private baseUrl = '/api';

  //TODO: HTTP GET
  getAllData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
  public getPosts(id) {
    return this.http.get<ImgForm[]>(`${this.baseUrl}/files/${id}`);
  }

  //TODO: HTTP POST
  PostInfo(form_info: FormData):Observable<HttpEvent<any>> {
    return this.http.post(`${this.baseUrl}/upload`, form_info, {
      responseType: 'json',
      reportProgress: true,
      observe: 'events',
    });
  }

  //TODO: HTTP POST by ID (ACTUALIZAR)
  PostEditInfo(form_info: FormData, id:String):Observable<HttpEvent<any>> {
    return this.http.post(`${this.baseUrl}/edit/${id}/file`, form_info, {
      responseType: 'json',
      reportProgress: true,
      observe: 'events',
    });
  }

  //TODO: HTTP DELETE
  deleteData(id) {
    console.log(
      '<upload-service> Eliminando img ID: ' +
        `${this.baseUrl}/delete-img/${id}`
    );
    return this.http
      .delete(`${this.baseUrl}/delete-img/${id}`)
      .subscribe(() => console.log('borrado bien'));
  }
}
