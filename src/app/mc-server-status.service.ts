import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerStatus } from './server-status';


@Injectable({
  providedIn: 'root'
})
export class McServerStatusService {

constructor(
  private http: HttpClient
  ) { }


  getStatus(){
    return this.http.get<ServerStatus>('https://mcapi.us/server/status?ip=oeloes.space')
  }
}
