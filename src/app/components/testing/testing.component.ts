import { Component, OnInit } from '@angular/core';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Component({ 
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor() { }

  file: File;
  photoSelected: string | ArrayBuffer;

  onPhotoSelected():void{}



  ngOnInit(): void {
  }

}
