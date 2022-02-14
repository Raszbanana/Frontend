import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly APIurl = 'http://localhost:3000/users'
  constructor(private http: HttpClient) { }

  public getUsers() {
     return this.http.get<any>(this.APIurl);
  }
}
