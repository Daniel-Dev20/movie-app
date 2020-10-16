
import { GenerosComponent } from './../generos/generos.component';
import { ModalController } from '@ionic/angular';
import { Pelicula, PeliculaDetalle, Cast } from './../../interfaces/interfaces';
import { PeliculasService } from './../../services/peliculas.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {
  @Input() id;
  pelicula: PeliculaDetalle = {};
  ocultar = 150;
  peliculas: Pelicula[] = [];
  actores: Cast[] = [];
  slideOptions = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  }

   constructor(private movieService: PeliculasService, private modalController: ModalController) { }

  ngOnInit() {
    this.movieService.getPeliculasDetalles(this.id).subscribe(response =>{
      this.pelicula = response;
      console.log(response);
      
    });
    this.getActores();
  }

getActores(){
  this.movieService.getActoresPeliculas(this.id).subscribe(response2 => {
    this.actores = response2.cast;
    console.log(response2);
  })
}

  async verGeneros(id:string){
    const modal = await this.modalController.create({
      component: GenerosComponent,
      componentProps:{
        id: id
      }

    });
    modal.present();
  }
  regresar(){
    this.modalController.dismiss();
  }

}

