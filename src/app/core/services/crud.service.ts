import {Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {API_URL} from "@core/config/api.config";

@Injectable({
  providedIn: 'root',
})
export class CrudService<T> {

  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string) {}

  create(item: T, resource: string): Observable<T> {
    const url = `${this.apiUrl}/${resource}`;
    return this.http.post<T>(url, item);
  }

  getAll(resource: string): Observable<T[]> {
    const url = `${this.apiUrl}/${resource}`;
    return this.http.get<T[]>(url);
  }

  getById(id: number, resource: string): Observable<T> {
    const url = `${this.apiUrl}/${resource}/${id}`;
    return this.http.get<T>(url);
  }

  update(id: number, item: T, resource: string): Observable<T> {
    const url = `${this.apiUrl}/${resource}/${id}`;
    return this.http.put<T>(url, item);
  }

  delete(id: number, resource: string): Observable<void> {
    const url = `${this.apiUrl}/${resource}/${id}`;
    return this.http.delete<void>(url);
  }
}
