import { Component, OnInit } from '@angular/core';
import { BloggerservicesService } from '../bloggerservices.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {

  blogs = null;
  constructor(private bloggerService: BloggerservicesService, private router: Router) { }

  ngOnInit() {
    this.bloggerService.listBlogs((data) => {
      if(!(data instanceof Error)) {
        console.log(data);
        this.blogs = data;
      } 
      else {
        console.log("Blog List Fail");
      }
      
    });
  }

  onClick(blogId) {
    this.router.navigate(['/showblog', blogId]);
  }

}
