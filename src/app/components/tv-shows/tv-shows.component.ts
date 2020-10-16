import { DetallestvShowComponent } from './../detallestv-show/detallestv-show.component';
import { ModalController } from '@ionic/angular';
import { Result } from './../../interfaces/interfaces';

import { PeliculasService } from './../../services/peliculas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss'],
})
export class TvShowsComponent implements OnInit {
  tv: Result[] = [];
  constructor(private peliculaService: PeliculasService, private modalController:ModalController) { }

  ngOnInit() {
    this.peliculaService.getTvShowsPopulares().subscribe(response => {
      this.tv.push(...response.results);
    })
 
  }
  async verDetalle(id:string){
    const modal = await this.modalController.create({
      component:DetallestvShowComponent,
      componentProps: {
        id:id
      }
    });
    modal.present();
  }

}
