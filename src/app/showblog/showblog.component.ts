import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { BloggerservicesService } from '../bloggerservices.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-showblog',
  templateUrl: './showblog.component.html',
  styleUrls: ['./showblog.component.css']
})
export class ShowblogComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bloggerService: BloggerservicesService,
    private cdr: ChangeDetectorRef) { }
    
  blog = {};

  @Input()
  id: string;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.bloggerService.getBlog(this.id, (data) => {
      this.blog = data.body;
      console.log("Data from Service: " + JSON.stringify(this.blog));
    }
    );
  }

  addComment(textComment){
    console.log(textComment);
    this.bloggerService.addComment(textComment, this.id, (resp) => {
      console.log("Data from Service: " + JSON.stringify(resp));
      this.bloggerService.getBlog(this.id, (data) => {
        this.blog = data.body;
        console.log("Data from Service: " + JSON.stringify(this.blog));
      });
    }
    ); 
  }
}
