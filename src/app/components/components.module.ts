
import { TabsPageModule } from './../tabs/tabs.module';
import { SlideBackdropSimilaresComponent } from './slide-backdrop-similares/slide-backdrop-similares.component';
import { SlidePosterSimilaresComponent } from './slide-poster-similares/slide-poster-similares.component';
import { GenerosComponent } from './generos/generos.component';
import { SlidesshowPosterParesComponent } from './slidesshow-poster-pares/slidesshow-poster-pares.component';
import { SlidesshowTvShowPosterComponent } from './slidesshow-tv-show-poster/slidesshow-tv-show-poster.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { DetallesComponent } from './detalles/detalles.component';
import { SlidesshowPosterComponent } from './slidesshow-poster/slidesshow-poster.component';
import { PipesModule } from './../pipes/pipes.module';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesshowParesComponent } from './slidesshow-pares/slidesshow-pares.component';
import { SlidesshowParesTvShowComponent } from './slidesshow-pares-tv-show/slidesshow-pares-tv-show.component';
import { DetallestvShowComponent } from './detallestv-show/detallestv-show.component';



@NgModule({
  entryComponents: [
    DetallesComponent,

  ],
  declarations: [
    SlideshowBackdropComponent, 
    SlidesshowPosterComponent, 
    SlidesshowParesComponent, 
    DetallesComponent, 
    TvShowsComponent, 
    SlidesshowTvShowPosterComponent,
    SlidesshowParesTvShowComponent,
    SlidesshowPosterParesComponent,
    DetallestvShowComponent,
    GenerosComponent,
    SlidePosterSimilaresComponent,
    SlideBackdropSimilaresComponent
  

  ]
    ,
  exports: [
    SlideshowBackdropComponent, 
    SlidesshowPosterComponent, 
    SlidesshowParesComponent, 
    DetallesComponent, 
    TvShowsComponent, 
    SlidesshowTvShowPosterComponent,
    SlidesshowParesTvShowComponent,
    SlidesshowPosterParesComponent,
    SlidePosterSimilaresComponent,
    SlideBackdropSimilaresComponent
  

  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
