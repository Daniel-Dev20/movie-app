import { PeliculaDetalle, RespuestaCredits, RespuestaTvShow, DetalleTvShow } from './../interfaces/interfaces';

import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMovie } from '../interfaces/interfaces';

const URL = environment.url; //Guardamos el valor del url en la variable
const apiKey = environment.apikey; //Guardamos el apikey de la api que esta declarada en enviroment

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private popularesPage = 0;
  constructor(private http: HttpClient) { }//Importamos el modulo HttpClient para poder hacer la peticion y la guaramos en la variable http

//Creamos funciones para optimar codigo de la peticion http a la url de la api
private ejecutarQuery<T>(query:string){
  
  query = URL + query; //Guardamos el valor de la variable url en el query y concatenamos la misma
  query += `&api_key=${apiKey}&language=es&include_image_language=es`;

  return this.http.get<T>(query);
 
}

//Creamos funcion para traer al servicio las peliculas populares
getPopulares(){
  this.popularesPage++;
  const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;
  
 
  return this.ejecutarQuery<RespuestaMovie>(query);
}

//Creamos una funcion que retorna la  url de la api con los datos 
  getRecientes(){
    return this.ejecutarQuery<RespuestaMovie>('/discover/movie?primary_release_date.gte=2020-01-15&primary_release_date.lte=2020-01-30');
  }

  getPeliculasDetalles(id: string){
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${id}?a=1`);
  }
  getActoresPeliculas(id: string){
    return this.ejecutarQuery<RespuestaCredits>(`/movie/${id}/credits?a=1`);
  }
  getGenerosPeliculas(id:string){
    return this.ejecutarQuery<RespuestaMovie>(`/movie/${id}/similar?a=1`);
  }
  getTvShowLatest(){
    return this.ejecutarQuery<RespuestaTvShow>(`/tv/on_the_air?a=1`);
  }
  getTvShowsPopulares(){
    return this.ejecutarQuery<RespuestaTvShow>(`/tv/popular?a=1`);
  
  }
  getTvShowDetalles(id:string){
    return this.ejecutarQuery<DetalleTvShow>(`/tv/${id}?a=1`);
  }
  BuscarMovie(texto:string){
    return this.ejecutarQuery<RespuestaMovie>(`/search/movie?query=${texto}`);
  }

}
