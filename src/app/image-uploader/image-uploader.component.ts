import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {
  selectedFile: File = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0]; // this file object itself
  }

  onUpload() {
    const fd = new FormData;
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('http://us-central1-fb-cloud-functions-demo.cloudfunctions.net/uploadFile', fd)
        .subscribe(res => {
          console.log('res', res);
        });
  }

}
