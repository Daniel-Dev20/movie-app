import { Pelicula } from './../../interfaces/interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-backdrop-similares',
  templateUrl: './slide-backdrop-similares.component.html',
  styleUrls: ['./slide-backdrop-similares.component.scss'],
})
export class SlideBackdropSimilaresComponent implements OnInit {
  @Input() genero: Pelicula[] = [];
  constructor() { }

  ngOnInit() {}

}
