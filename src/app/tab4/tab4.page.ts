import { Result } from './../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  tv: Result[] = [];
  tvShowRecientes: Result[] = [];
  constructor(private peliculaService: PeliculasService) { }

  ngOnInit() {
    this.peliculaService.getTvShowsPopulares().subscribe(response => {
      console.log('TV SHOWS',response);
      this.tv.push(...response.results);
    });
    this.getTvshowLatests();
  }

  getTvshowLatests(){
    this.peliculaService.getTvShowLatest().subscribe(response => {
    console.log('RECIENTES', response);
    this.tvShowRecientes.push(...response.results)

    });
  }

}
