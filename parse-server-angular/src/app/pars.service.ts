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

  getCases(){
    return this.http.get(this.url +'/cases',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });

  }

  createCase(body:any){
    return this.http.post(this.url + '/cases',body, {
      observe:'body',
      withCredentials:true,  
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  

  updateCase(body:any,id:any){
    console.log(id);
    console.log(body);
    return this.http.put(this.url +'/cases/'+ id,body, {
      observe:'body',
      withCredentials:true,  
      headers:new HttpHeaders().append('Content-Type','application/json')})
    .subscribe(response => console.log(response));
  }

  deleteCase(id:any){
    return this.http.delete(this.url+ '/cases/'+ id  , {
      observe:'body',
      withCredentials:true,  
      headers:new HttpHeaders().append('Content-Type','application/json')})
    .subscribe(response => console.log(response));
  }

  getUserById(id:any){
    return this.http.get(this.url +'/users/'+id,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
    
  


}
