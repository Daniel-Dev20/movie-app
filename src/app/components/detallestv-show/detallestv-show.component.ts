import { DetallesComponent } from './../detalles/detalles.component';
import { DetalleTvShow } from './../../interfaces/interfaces';
import { PeliculasService } from './../../services/peliculas.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detallestv-show',
  templateUrl: './detallestv-show.component.html',
  styleUrls: ['./detallestv-show.component.scss'],
})
export class DetallestvShowComponent implements OnInit {
  @Input() id;
  image: DetalleTvShow[] = [];
  tvShow: DetalleTvShow= {};
  ocultar = 150;
  constructor(private peliculaService: PeliculasService) { }

  ngOnInit() {
    this.peliculaService.getTvShowDetalles(this.id).subscribe(response => {
      console.log(response);
      this.tvShow = response;
    });
  
  }

}
