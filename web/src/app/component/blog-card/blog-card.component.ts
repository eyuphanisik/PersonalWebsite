import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Route } from '@angular/router';
import { Article } from 'src/app/model/article';
import { BlogComponent } from '../blog/blog.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  isAdmin: boolean;
  blogs: Article[] = [{ title: "deneme", summary: "denemeee", description: "deeee", lastUpdateDate: "dass" },
  { title: "deneme", summary: "denemeee", description: "deeee", lastUpdateDate: "dass" },
  { title: "deneme", summary: "denemeee", description: "deeee", lastUpdateDate: "dass" },
  { title: "deneme", summary: "denemeee", description: "deeee", lastUpdateDate: "dass" }]
  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
    this.isAdmin = this.isAdminLogin();
  }
  isAdminLogin() {
    if (sessionStorage.getItem("token")) return true;
    return false;

  }
  deleteItem(item: Article) {
    this.blogs.splice(this.blogs.findIndex(a => a == item), 1)
  }

  addToBlog() {
    let blog: Article = {
      title: "", summary: "", description: "",
      lastUpdateDate: formatDate(new Date(), 'dd-MM-yyyy', 'en-US')
    };
    console.log(blog.lastUpdateDate)
    this.openDialog(blog)
  }

  openDialog(blog): void {
    let blogClone: string = structuredClone(blog)
    const dialogRef = this.dialog.open(BlogEditComponent, {
      width: '600px',
      data: blogClone,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        if (this.blogs.indexOf(blog) != -1) {
          this.blogs[this.blogs.indexOf(blog)] = result;
        }
        else {
          this.blogs.push(result)
        }
      }
    });
  }
}
