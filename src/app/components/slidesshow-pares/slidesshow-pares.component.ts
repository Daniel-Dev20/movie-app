import { DetallesComponent } from './../detalles/detalles.component';
import { ModalController } from '@ionic/angular';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Component({
  selector: 'app-slidesshow-pares',
  templateUrl: './slidesshow-pares.component.html',
  styleUrls: ['./slidesshow-pares.component.scss'],
})
export class SlidesshowParesComponent implements OnInit {
  @Input() peliculas: Pelicula[] = [];
  @Output() cargarMas =  new EventEmitter();
  slidesOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  };
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  onClick(){

    this.cargarMas.emit();
  }
  async verDetalle(id:string){
    const modal = await this.modalController.create({
      component: DetallesComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }

}
