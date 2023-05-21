import { Component, Renderer2, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/Frase';
import {FRASES} from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.sass']
})
export class PainelComponent implements OnDestroy {
  public frases: Frase[] = FRASES
  public resposta : string = ''
  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0
  public acerto = false
  public tentativas: number = 3
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()



  constructor(private renderer: Renderer2) {
    this.rodadaFrase = this.frases[this.rodada]
  }

  ngOnDestroy(): void {
    console.log('componente painel destruido')
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value)

  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }

  public verificarResposta(): void {

    if (this.rodadaFrase.frasePtBr === this.resposta) {
      this.rodada++
      this.progresso = this.progresso + (100 / this.frases.length)

      if(this.rodada === 10) {
        this.encerrarJogo.emit('vitória')
      }

      this.atualizaRodada()

      const toastElement = document.getElementById('successToast')
      this.renderer.addClass(toastElement, 'show')

      setTimeout(() => {
        this.renderer.removeClass(toastElement, 'show')
      }, 3000)
    } else {
      this.tentativas--
      if( this.tentativas === -1) {
        this.encerrarJogo.emit('derrota')

      }

      const toastElement = document.getElementById('failureToast')
      this.renderer.addClass(toastElement, 'show')

      setTimeout(() => {
        this.renderer.removeClass(toastElement, 'show')
      }, 3000)
    }

  }
}
