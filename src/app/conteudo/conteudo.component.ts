import { Component, OnInit } from '@angular/core';
import { ConteudoService } from '../conteudo.service'
import { ConteudoMo } from '../shared/conteudo.model'

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css'],
  providers: [ ConteudoService ]
})
export class ConteudoComponent implements OnInit {

  public conteudos: ConteudoMo[] = []

  constructor(private conteudoService: ConteudoService) {}

  ngOnInit(){
    this.conteudos = this.conteudoService.getConteudo()
    console.log(this.conteudos)
  }

}
