import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [   
		{ id: 11, name: 'Server-Courtouis'},
		{ id: 12, name: 'Server-Carvajal'},
		{ id: 13, name: 'Server-Mendi'},
		{ id: 14, name: 'Server-Sergio Ramos'},
		{ id: 15, name: 'Server-Varane'},
		{ id: 16, name: 'Server-Cassemiro'},
		{ id: 17, name: 'Server-Modric'},
		{ id: 18, name: 'Server-Kross'},
		{ id: 19, name: 'Server-Bale'},
		{ id: 20, name: 'Server-Benzema'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}