import { DetallesComponent } from './../detalles/detalles.component';
import { Pelicula } from './../../interfaces/interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { strict } from 'assert';

@Component({
  selector: 'app-slidesshow-poster',
  templateUrl: './slidesshow-poster.component.html',
  styleUrls: ['./slidesshow-poster.component.scss'],
})
export class SlidesshowPosterComponent implements OnInit {
@Input() peliculas: Pelicula[] = [];
slidesOpts = {
  slidesPerView: 3.3,
  freeMode: true
};
  constructor(private modalController: ModalController) { }

  ngOnInit() { }



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



