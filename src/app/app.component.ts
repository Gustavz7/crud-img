import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private uploadService: UploadFileService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  title = 'crud-img';
  homeView: boolean = true;
  createPhotoView: boolean = false;

  home_view() {
    if (this.router.url === "/"){
      return this.homeView = false;
    }else{
      return true;
    }
  }
  edit_view() {
    if (this.router.url === "/create-photo"){
      return this.createPhotoView = true;
    }else{
      return false;
    }
  }

  ngOnInit(): void {
    this.home_view();
  }
}