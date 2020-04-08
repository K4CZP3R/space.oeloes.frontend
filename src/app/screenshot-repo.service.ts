import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenshotRepoService {
  constructor(
    private http: HttpClient
  ) { }

getPhotos(){
  return this.http.get('https://raw.githubusercontent.com/K4CZP3R/space.oeloes.resources/master/screenshot-repo/data.json');
}

}
