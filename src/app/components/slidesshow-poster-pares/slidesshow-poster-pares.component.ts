import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Result } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slidesshow-poster-pares',
  templateUrl: './slidesshow-poster-pares.component.html',
  styleUrls: ['./slidesshow-poster-pares.component.scss'],
})
export class SlidesshowPosterParesComponent implements OnInit {
  @Input()  tv: Result[] = [];
  constructor(private modalController: ModalController) { }
  slideOptions = {
    slidesPerView: 3.3,
    freeMode: true
  }


  ngOnInit() {}

}
