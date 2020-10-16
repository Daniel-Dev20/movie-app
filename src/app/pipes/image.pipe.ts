import { environment } from './../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';

//Guardamos la url para podes obtener la imagen desde el servicio l desde la api
const URL = environment.imgPath;//Guardamos el url de las imagenes en las variables que esta declarado en enviroment

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, size: string = "w500"): string {
    //Hacemos condicion si no existe imagen retorna una imagen de referencia que esa pelicula no tiene portada 
    if(!img){
      return './assets/no-image-banner.jpg';
    }
    //Creamos variable para concatenar lam variable de url el tamaño de la imagen y la imagen que llega de la api
    const imgUrl = `${URL}/${size}${img}`;


    return imgUrl;
  
  }

}
