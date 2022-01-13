import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-img';

  home_view: boolean = true;

  in_home(){
    this.home_view = false;
  }
}
