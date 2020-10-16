import { DetallesComponent } from './../detalles/detalles.component';
import { Pelicula } from './../../interfaces/interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
@Input() peliculas: Pelicula[] = [];
slidesOpts = {
  slidesPerView: 1.1,
  freeMode: true
};
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async verDetalle(id:string){
    const modal = await this.modalController.create({
      component: DetallesComponent,
      componentProps: {
        id: id
      }
    });
    modal.present();
  }
 
}
