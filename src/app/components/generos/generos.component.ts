import { Pelicula } from 'src/app/interfaces/interfaces';
import { PeliculasService } from './../../services/peliculas.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.scss'],
})
export class GenerosComponent implements OnInit {
  @Input() id;
  genero: Pelicula[] = [];
  constructor(private peliculasService:PeliculasService) { }

  ngOnInit() {
    this.peliculasService.getGenerosPeliculas(this.id).subscribe(response => {
      console.log('GENERO',response);
      this.genero.push(...response.results);
    });
  }

}
