import { Component, inject } from '@angular/core';
import { ControlService } from '../../services/control.service';
import { Caso } from '../../model/caso';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  lista: Caso[] = [];
  private _controlService = inject(ControlService);
 
  ngOnInit(){
    this.listar();
  }
  
   
    listar(){
      this._controlService.getList().subscribe(data =>{
        this.lista = data.body;
        console.log(this.lista);
      })
    }
}
