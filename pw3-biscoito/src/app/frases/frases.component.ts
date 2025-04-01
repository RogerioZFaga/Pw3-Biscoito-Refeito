import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.css' 
})
export class FrasesComponent {
  frases = [
    "Grandes oportunidades chegam quando você menos espera. Esteja pronto!",
    "A sorte favorece os corajosos. Dê o primeiro passo!",
    "O sucesso é construído com pequenos esforços diários.",
    "Uma boa notícia chegará em breve. Mantenha o coração aberto!",
    "A resposta que você procura já está dentro de você.",
    "Seus sonhos são sementes do seu futuro. Cultive-os com cuidado.",
    "Algo inesperado e maravilhoso está prestes a acontecer!",
    "Não tenha medo de recomeçar. O melhor ainda está por vir!",
    "Siga sua intuição, ela conhece o caminho.",
    "Cada dia é uma nova chance para ser feliz!"
  ];
  @Input() numeroFrase!: number
  frase = this.frases[Math.floor(Math.random() * 10)];
  @Input() exibir=false
}
