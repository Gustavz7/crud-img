import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})

export class AddEditComponent implements OnInit {

  titleControl = new FormControl('', [Validators.required]);


  constructor() {
    this.titleControl.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(value =>
        console.log(value))
  }

  ngOnInit(): void {
  }

  getTitle(event: Event) {
    event.preventDefault();
    console.log(this.titleControl.value);
  }

}
