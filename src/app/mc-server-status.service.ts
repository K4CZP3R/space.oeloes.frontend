import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ServerStatus } from './server-status';


@Injectable({
  providedIn: 'root'
})
export class McServerStatusService {

  constructor(
    private http: HttpClient
  ) { }
  getStatus() {
    return this.http.get<ServerStatus>('https://oeloes.space:8001/oeloes.space')
  }
}
