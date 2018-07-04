import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero'
import {HEROES} from '../mock_heroes'
import {HeroService} from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  getHeroesCallback(heroes: Hero[]): void {
    this.heroes = heroes;
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.getHeroesCallback(heroes)
    });
  }
  ngOnInit() {
    this.getHeroes();
  }

}
