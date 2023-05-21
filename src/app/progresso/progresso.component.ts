import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.sass']
})
export class ProgressoComponent {
  @Input() public progresso: number = 0

}
