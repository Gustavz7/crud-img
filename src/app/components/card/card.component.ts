import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { Router } from '@angular/router';

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
  ) { }

  @HostListener('unloaded')
  ngOnInit(): void {
    console.log('vista home iniciada');
    this.loadItemsData();
  }
  ngOnDestroy(): void {
    console.log('vista home destruida');
  }

  loadItemsData() {
    this.uploadService.getAllData().subscribe({
      complete: () => { console.info("loadItemsData finalizado") }, // completeHandler
      error: () => { this.loadDummyData() },    // errorHandler 
      next: (data) => { this.fileInfos = data },     // nextHandler
    });
  }
  loadDummyData() {
    this.uploadService.getLocalDummyData().subscribe({
      complete: () => { console.info("loadDummyData finalizado") }, // completeHandler
      error: () => { this.loadDummyData() },    // errorHandler 
      next: (data) => { this.fileInfos = data },     // nextHandler
    });
  }
}
