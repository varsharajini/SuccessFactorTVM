import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

//   private baseURL!: 'http://localhost:3000/data';

//   getAllData(): Observable<any> {
//     return this.http.get(`${this.baseURL}/getAll`)
//  }
//  deleteData(id: string): Observable<any> {
//   return this.http.delete(`${this.baseURL}/delete/${id}`)
// }

}
