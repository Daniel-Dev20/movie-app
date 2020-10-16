import { DetallestvShowComponent } from './../detallestv-show/detallestv-show.component';
import { ModalController } from '@ionic/angular';
import { PeliculasService } from './../../services/peliculas.service';
import { Result } from './../../interfaces/interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidesshow-tv-show-poster',
  templateUrl: './slidesshow-tv-show-poster.component.html',
  styleUrls: ['./slidesshow-tv-show-poster.component.scss'],
})
export class SlidesshowTvShowPosterComponent implements OnInit {
@Input() tv: Result[] = [];
  constructor(private peliculasService: PeliculasService, private modalController: ModalController) { }

  slideOptions ={
    slidesPerView: 3.3,
    freeMode: true

  };

  ngOnInit() {

  }

  async verDetalle(id:string){
    const modal = await this.modalController.create({
      component: DetallestvShowComponent,
      componentProps: {
        id:id
      }
    });
    modal.present();
  }

}
