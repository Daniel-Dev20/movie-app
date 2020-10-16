import { RespuestaMovie, Pelicula } from './../interfaces/interfaces';
import { PeliculasService } from './../services/peliculas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  //Guardamos el arreglo de peliculas para luego utilizarlo en el ngfor del html
peliculasRecientes: Pelicula[] = []
populares: Pelicula[] = [];
  constructor(private peliService: PeliculasService) {}//Exportamos el servicio 
  
  //Creamos efectos en el slide 
 
 //Obtenemos los resultados del servicio de peliculas 
  ngOnInit(){
    this.peliService.getRecientes().subscribe(response => {
      this.peliculasRecientes = response.results
    });
    this.getPopulares();
   
  }

  cargarMas(){
    this.getPopulares();
  }
  getPopulares(){
    this.peliService.getPopulares().subscribe(response => {
      const arrTemp = [...this.populares, ...response.results]
      console.log('Populares', response);
    this.populares = arrTemp;
    })
  }
}
