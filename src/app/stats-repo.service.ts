import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsRepoService {

constructor(
  private http: HttpClient
) { }


getStats(){
  return this.http.get('https://raw.githubusercontent.com/K4CZP3R/space.oeloes.resources/master/stats-repo/latest.json');
}

}
