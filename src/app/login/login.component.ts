import { Component, OnInit } from '@angular/core';
import { BloggerservicesService } from '../bloggerservices.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private bloggerService: BloggerservicesService, private router: Router) { }

  ngOnInit() {
  }

  onClick(uname, password) {
    console.log(uname + ":" + password);
    this.bloggerService.login(uname, password, (auth_status) => {
      if(auth_status === true) {
        console.log("Auth Success");
        this.router.navigate(['/bloglist']);
      } 
      else {
        console.log("Auth Fail");
      }
      
    });
  }

}
