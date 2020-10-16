import { DetallestvShowComponent } from './../detallestv-show/detallestv-show.component';
import { ModalController } from '@ionic/angular';
import { Result } from './../../interfaces/interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidesshow-pares-tv-show',
  templateUrl: './slidesshow-pares-tv-show.component.html',
  styleUrls: ['./slidesshow-pares-tv-show.component.scss'],
})
export class SlidesshowParesTvShowComponent implements OnInit {
  @Input()  tv: Result[] = [];
  constructor(private modalController: ModalController) { }
  slideOptions = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  }
  ngOnInit() {}

  async verDetalle(id:string){
    const modal = await this.modalController.create({
      component: DetallestvShowComponent,
      componentProps:{
        id:id
      }
    });
    modal.present();
  }

 

}
