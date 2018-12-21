import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { IMovie } from '../imovie';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private movieService:MovieService) { }

  ngOnInit() {
  }
  
  imagen: string

  guardarFoto(evt){
    //console.log(evt)
    const fs: FileReader = new FileReader()
    /*
    FileReader.onloadend
    A handler for the loadend event. This event is triggered each time the reading operation is completed (either in success or failure).
    */
   fs.onloadend  = (resultado)=>{
     this.imagen = (resultado.currentTarget as FileReader).result as string
     console.log("imagen loaded.")
   }

   console.log("before take url path")

   fs.readAsDataURL(evt.target.files[0])

   console.log("after take url path")
  }


  agregarMovie(titulo:string, director:string, afiche: string, anio: number,visualizar: boolean){
    console.log("agregando pelicula")
    const movie:IMovie = {titulo,director,afiche:this.imagen,anio,visualizar}
    this.movieService.agregarMovie(movie)
    this.imagen = undefined
  }


}
