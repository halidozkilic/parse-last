import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ParsService {

  constructor(private http: HttpClient) { }
  private url= 'http://localhost:3000';


  getUsers(){
    return this.http.get(this.url +'/users',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });

  }
}
