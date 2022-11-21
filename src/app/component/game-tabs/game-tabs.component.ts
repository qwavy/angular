import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/models';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent {
  @Input() game!: Game;

}
