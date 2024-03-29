import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _uploadFileService: UploadFileService,
    public dialog: MatDialog
  ) {}

  id: number | string;
  public imgn = []; //almacena de los datos del registro


  //TODO  HTTP GET INFO
  getInfoImg() {
    this._uploadFileService.getFile(this.id).subscribe((data) => {
      this.imgn.push(data);
    });
  }

  //TODO  Redireccion a la vista en donde se encuentra el formulario de editar
  GoToeditImg() {
    this.router.navigate(['edit-photo/', this.id]);
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('url');
    this.getInfoImg();
  }

  //TODO ////////////////////////////// Dialog Ts //////////////////////////////////////

  //TODO  HTTP DELETE IMG
  veredicto: boolean;
  response = [];
  deleteRequest() {
    this._uploadFileService.deleteData(this.id).subscribe((res) => {
      this.response.push(res);
      this.router.navigate(['/']);
    });
  }
  deleteImg(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: { id: this.id, veredicto: this.veredicto },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.veredicto = result;
      if (this.veredicto) {
        this.deleteRequest();
      }
    });
  }
}
export interface DialogData {
  id: string;
  veredicto: boolean;
}

import { Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';


@Component({
  selector: 'delete-dialog-component',
  templateUrl: 'delete-dialog.component.html',
  styleUrls: ['./summary.component.css'],
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
