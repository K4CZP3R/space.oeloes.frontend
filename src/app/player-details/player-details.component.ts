import { OnInit  } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { StatsRepoService } from '../stats-repo.service';
import { Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { KeyValue } from '@angular/common';




@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html'
})
export class PlayerDetailsComponent implements OnInit {
  playerStats: any;

  valueAscOrder = (a: KeyValue<string, number>, b: KeyValue<string, number>): number => {
    return a.value > b.value ? -1 : (b.value > a.value ? 1 : 0);
  }

  constructor(
    private route: ActivatedRoute,
    private statsRepoService: StatsRepoService

    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.statsRepoService.getStats().subscribe((data) => {
        this.playerStats = (data as any).find(x=> x.profile.uuid === params.get( 'playerUuid'));
      });
    });
  }

}
