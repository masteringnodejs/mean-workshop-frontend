import { Component, OnInit } from '@angular/core';
import { BloggerservicesService } from '../bloggerservices.service';
import {Router} from "@angular/router"
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private bloggerService: BloggerservicesService, 
    private router: Router,
    private snackbarService: SnackbarService ) { }

  ngOnInit() {
  }

  onClick(uname, password) {
    console.log(uname + ":" + password);
    this.bloggerService.login(uname, password, (auth_status) => {
      if(auth_status === true) {
        console.log("Auth Success");
        this.router.navigate(['/bloglist']);
        this.snackbarService.showBar('Login Successful!');
      } 
      else {
        console.log("Auth Fail");
        this.snackbarService.showBar('Login Failed! Try again.');

      }
      
    });
  }

  onClickRegister(uname, password) {
    console.log(uname + ":" + password);
    this.bloggerService.register(uname, password, (auth_status) => {
      if(auth_status === true) {
        console.log("Register Success");
        this.router.navigate(['/']);
        this.snackbarService.showBar('Registration succeded. Please Login.');

      } 
      else {
        console.log("Register Fail");
        this.snackbarService.showBar('Registration failed. Try with new user name.');
      }
      
    });
  }

}
