import { ServerStatus } from './../server-status';
import { McServerStatusService } from './../mc-server-status.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mc-server-status-card',
  templateUrl: './mc-server-status-card.component.html',
  providers: [McServerStatusService]
})
export class McServerStatusCard implements OnInit {
  status: ServerStatus;
  constructor(
    private mcServerStatusService: McServerStatusService
  ) {
  }


  ngOnInit() {
    this.getData();

  }

  getData() {
    this.mcServerStatusService.getStatus().subscribe((data: ServerStatus) => this.status = {
      version: (data as any).version,
      address: (data as any).address,
      online: (data as any).online,
      current_players: (data as any).current_players,
      latency: (data as any).latency,
      players: (data as any).players
    })

  }

}
