import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, OnDestroy {
  public fileInfos = []; //alamacena todos los registros OBJETO solo iterable con |Keyvalue

  fileId: Observable<any>; //almacena el id
  errorMsg: string;
 
  goToDetails(event: any) {
    this.fileId = event;
    this.router.navigate(['summary-photo/', this.fileId]);
  }

  constructor(
    private uploadService: UploadFileService,
    private router: Router
  ) {}

  @HostListener('unloaded')
  ngOnInit(): void {
    console.log('vista home iniciada');
    this.uploadService.getAllData().subscribe((data) => {
      this.fileInfos = data;
      
    });
  }
  ngOnDestroy(): void {
    console.log('vista home destruida');
  }
}
