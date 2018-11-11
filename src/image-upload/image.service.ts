import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImageService {
  constructor(private http: HttpClient) {
  }

  public postImage(url: string, image: File, partName: string = 'image', customFormData?: { [name: string]: any }): any {

    if (!url || url === '') {
      throw new Error('Url is not set! Please set it before doing queries');
    }

    let formData = new FormData();
    for (let key in customFormData) {
      formData.append(key, customFormData[key]);
    }
    formData.append(partName, image);
    return this.http.post(url, formData);
  }
}
