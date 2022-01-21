import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  fileInfos: Observable<any>;
  fileId: Observable<any>; //almacena el id
  errorMsg: string;

  goToDetails(event: any) {
    this.fileId = event.id;
    this.router.navigate(['summary-photo/', this.fileId]);
  }

  getData() {
    this.fileInfos = this.uploadService.getAllData().pipe(
      catchError((error) => {
        if (error.error instanceof ErrorEvent) {
          this.errorMsg = `Error: ${error.error.message}`;
        } else {
          this.errorMsg = `Error: ${error.message}`;
        }
        return of([]);
      })
    );

  }

  constructor(
    private uploadService: UploadFileService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

 
  ngOnInit(): void {
    this.getData();

  }

}
