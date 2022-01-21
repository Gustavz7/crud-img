import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
})
export class AddEditComponent implements OnInit {
  constructor(
    private uploadService: UploadFileService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}
  //! Vista edit
  title: string = 'Ingresa los nuevos datos de la imagen';
  id: string;
  status: string = 'Subiendo archivo...';
  progress: number = 0;

  //? test formulario reactivo
  uploadForm: FormGroup;
  formIsReady: boolean = false;
  img_ready: boolean = false;
  formData = new FormData();
  isUploading: boolean = false;
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('image').setValue(file);
      this.img_ready = true;
      this.formIsReady = true;
    }
  }
  onSubmit() {
    this.isUploading = true;
    this.formData.append('title', this.uploadForm.get('title').value);
    this.formData.append(
      'description',
      this.uploadForm.get('description').value
    );
    this.formData.append('image', this.uploadForm.get('image').value);

    if (this.id) {
      this.uploadService
        .PostEditInfo(this.formData, this.id)
        .subscribe((event) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round((100 * event.loaded) / event.total);
          } else if (event instanceof HttpResponse) {
            this.status = event.body.message;
          }
        });
    } else {
      this.uploadService.PostInfo(this.formData).subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round((100 * event.loaded) / event.total);
        } else if (event instanceof HttpResponse) {
          this.status = event.body.message;
        }
      });
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.uploadForm = this.formBuilder.group({
      title: [''],
      description: [''],
      image: [''],
    });
  }
}
