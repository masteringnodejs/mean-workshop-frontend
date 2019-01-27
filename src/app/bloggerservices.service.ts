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
    this.httpClient.post(`${this.apiURL}/login`, body, {observe: 'response', withCredentials: true})
    .subscribe((res)=>{
      return cb(res.status === 200);
    }, 
    (err) => {
      return cb(err);
    });
  }

  public listBlogs(cb){
    console.log("In list blogs");

    this.httpClient.get(`${this.apiURL}/listblogs`, {withCredentials: true})
    .subscribe((res)=>{
      return cb(res);
    }, 
    (err) => {
      return cb(err);
    });
  }

  public getBlog(id, cb){
    console.log("In get blogs");

    this.httpClient.get(`${this.apiURL}/getblog/${id}`, {observe: 'response', withCredentials:true})
    .subscribe((res)=>{
      return cb(res);
    }, 
    (err) => {
      return cb(err);
    });
  }

  public addComment(comment, id, cb){
    let body =  {comment: {comment: comment}};
    this.httpClient.post(`${this.apiURL}/addcomment/${id}`, body, {observe: 'response', withCredentials:true})
    .subscribe((res)=>{
      return cb(res);
    }, 
    (err) => {
      return cb(err);
    });
  }

  public addBlog(blog, cb){
    let body =  {blog: blog};
    this.httpClient.post(`${this.apiURL}/addblog`, body, {observe: 'response', withCredentials:true})
    .subscribe((res)=>{
      return cb(res);
    }, 
    (err) => {
      return cb(err);
    });
  }

  public logout(cb){
    this.httpClient.post(`${this.apiURL}/logout`, {}, {observe: 'response', withCredentials:true})
    .subscribe((res)=>{
      return cb(res);
    }, 
    (err) => {
      return cb(err);
    });
  }
}
