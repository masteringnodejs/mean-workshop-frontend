import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BloggerservicesService {
  apiURL: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  public login(uname, password, cb){
    console.log("From service: " + uname + ":" + password);
    let body =  {uname: uname, password: password};
    this.httpClient.post(`${this.apiURL}/login`, body, {observe: 'response'})
    .subscribe((res)=>{
      return cb(res.status === 200);
    }, 
    (err) => {
      return cb(err);
    });
  }

  public listBlogs(cb){
    console.log("In list blogs");

    this.httpClient.get(`${this.apiURL}/listblogs`)
    .subscribe((res)=>{
      return cb(res);
    }, 
    (err) => {
      return cb(err);
    });
  }

  public getBlog(id, cb){
    console.log("In get blogs");

    this.httpClient.get(`${this.apiURL}/getblog/${id}`)
    .subscribe((res)=>{
      return cb(res);
    }, 
    (err) => {
      return cb(err);
    });
  }
}
