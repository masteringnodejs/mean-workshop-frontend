import { Component, OnInit } from '@angular/core';
import { BloggerservicesService } from '../bloggerservices.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-newblog',
  templateUrl: './newblog.component.html',
  styleUrls: ['./newblog.component.css']
})
export class NewblogComponent implements OnInit {

  constructor(private bloggerService: BloggerservicesService, 
    private router: Router) { }

  public editorContent;;
  blog = {
    title: "",
    summary: "",
    blogContent: "",
    imageLink: ""

  };

  ngOnInit() {

  }

  onClickAddBlog(title, imagelink, summary) {
    this.blog.title = title;
    this.blog.summary = summary;
    this.blog.imageLink = imagelink;
    this.blog.blogContent = this.editorContent;

    this.bloggerService.addBlog(this.blog, (res) => {
      console.log("Added Blog!");
    });

    this.router.navigate(['/bloglist']);

  }


  onchange(data){
    console.log(data);
  }

  contentChanged(editor){
    this.editorContent = editor.html;
  }
}
