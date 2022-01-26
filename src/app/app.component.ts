import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}
  navIsOpen: boolean = false;
  title = 'crud-img';
  homeView: boolean = true;
  createPhotoView: boolean = false;

  home_view() {
    if (this.router.url === '/') {
      return (this.homeView = false);
    } else {
      return true;
    }
  }
  edit_view() {
    if (this.router.url === '/create-photo') {
      return (this.createPhotoView = true);
    } else {
      return false;
    }
  }

  ngOnInit(): void {
    this.home_view();
  }
}
