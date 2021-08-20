import { Component } from '@angular/core';
import { GifsService } from '../servicios/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent{

  get resultados(){
    return this.gifsService.resultados;
  }

  //Llamado para utilizar el servicio
  constructor(private gifsService: GifsService) { }

}
