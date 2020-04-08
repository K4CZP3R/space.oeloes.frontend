import { ServerStatus } from './../server-status';
import { McServerStatusService } from './../mc-server-status.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mc-server-status-card',
  templateUrl: './mc-server-status-card.component.html'
})
export class McServerStatusCard implements OnInit{
  status: ServerStatus;
    constructor(
      private mcServerStatusService: McServerStatusService
  ) { }

  ngOnInit(){
    this.getData();

    setInterval(()=>{
      this.getData();
    }, 5000);
    
  }

  getData(){
    this.mcServerStatusService.getStatus().subscribe((data: ServerStatus) => this.status = {
      version: (data as any).version,
      players: (data as any).players,
      icon: (data as any).icon,
      hostname: (data as any).hostname,
      ping: (data as any).ping

    });

  }

}
