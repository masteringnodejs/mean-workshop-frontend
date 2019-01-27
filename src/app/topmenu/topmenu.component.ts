import { Component, OnInit, Input } from '@angular/core';
import { BloggerservicesService } from '../bloggerservices.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  @Input()
  loggedin: boolean;

  constructor(private bloggerService: BloggerservicesService, private router: Router) { }

  ngOnInit() {
  }

  onClickLogout() {
    this.bloggerService.logout((res) => {
      this.router.navigate(['/login']);
    });
  }

  onClickAbout(){
    this.router.navigate(['/about']);
  }

  onClickAddBlog(){
    this.router.navigate(['/newblog']);
  }
}
