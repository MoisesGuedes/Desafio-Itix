import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  screen:any="aniversarios"
  day:any = "2017-10-30T01:00:00-03:00"
  aniversariantes:any = [
    {name:'José da Silva Teixeira'},
    {name:'Luiz Carlos Garcia'},
    {name:'Maria Aparecida Vieira Couto'},
    {name:'Roberto Almeida Spoletti'},
    {name:'Ana Maria Cerqueira'},
    {name:'Pedro Arthur Nogueira Rispinni'},
    {name:'Francine Fonseca Pedrini'}
  ]
  constructor() {
  }
  searchAniversariante(filter){
    if(filter){
      return this.aniversariantes.filter(item => item.name.indexOf(filter) !== -1);
    }
    return this.aniversariantes;
  }

}
