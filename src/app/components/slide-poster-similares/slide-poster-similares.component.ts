import { Pelicula } from 'src/app/interfaces/interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-poster-similares',
  templateUrl: './slide-poster-similares.component.html',
  styleUrls: ['./slide-poster-similares.component.scss'],
})
export class SlidePosterSimilaresComponent implements OnInit {
  @Input() genero: Pelicula[] = [];
  slideOptions = {
    slidesPerView: 3.3,
    FreeMode: true
  }
  constructor() { }

  ngOnInit() {}

}
