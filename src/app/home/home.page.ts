import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public pokemons: any[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.httpService
      .getPokemons()
      .subscribe((data: any) => (this.pokemons = data.results));
  }

  showPokemon(id: number) {
    console.log('id do pokemon: ', id);
  }
}
