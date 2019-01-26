import { Component, OnInit, Input } from '@angular/core';
import { BloggerservicesService } from '../bloggerservices.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-showblog',
  templateUrl: './showblog.component.html',
  styleUrls: ['./showblog.component.css']
})
export class ShowblogComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bloggerService: BloggerservicesService) { }
  
  @Input()
  id: string;
  
  blog: Object;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.bloggerService.getBlog(this.id, (data) => {
      console.log("Data from Service: " + JSON.stringify(data));
      this.blog = data;
    }
    );
  }
}
