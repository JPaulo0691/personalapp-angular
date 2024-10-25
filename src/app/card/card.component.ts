import { Component } from '@angular/core';

interface Plano{
  tipo: string;
  preco: number;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  plano: Plano = {
    tipo: 'Teste',
    preco: 1000
  };

  setTipo(tipo:string){
    this.plano.tipo = tipo;
  }

  getTipo(){
    return this.plano.tipo;
  }

  getFullPrice(){
    return `R$ ${this.plano.preco},00/mês`;
  }

}
