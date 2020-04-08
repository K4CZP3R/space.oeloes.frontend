import { StatsRepoService } from './../stats-repo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html'
})
export class PlayerListComponent implements OnInit {
  players_stats;
  constructor(
    private statsRepoService: StatsRepoService
  ) { }

  ngOnInit() {
    this.players_stats = this.statsRepoService.getStats();

  }

}
