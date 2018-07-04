import {Component, OnInit} from '@angular/core';
import {HeroesComponent} from "../heroes/heroes.component";
import {HeroService} from "../hero.service";
import {Hero} from "../Hero";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends HeroesComponent {

  constructor(heroService: HeroService) {
    super(heroService);
  }

  getHeroesCallback(heroes: Hero[]): void {
    this.heroes = heroes.slice(1, 5);
  }

}
