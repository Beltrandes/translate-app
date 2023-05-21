import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'translate-app';
  public jogoEmAndamento: boolean = true
  public tipoEncerramento: string = ''


  public encerrarJogo(tipo: string): void {
    this.tipoEncerramento = tipo
    this.jogoEmAndamento = false
  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true
    this.tipoEncerramento = ''
  }
}
