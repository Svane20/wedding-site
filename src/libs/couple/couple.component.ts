import { Component, signal } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

interface Couple {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-couple',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './couple.component.html',
  styleUrl: './couple.component.scss',
})
export class CoupleComponent {
  public couples = signal<Couple[]>([
    {
      id: 1,
      name: 'Kasper Svane',
      imageUrl: 'assets/images/couple/groom.jpg',
      description:
        'Kasper er nysgerrig, sjov og har en evne til at skabe tryghed og til at få alle til at føle sig velkomne. Han elsker sport, at arbejde med fede projekter inden for software og han er altid klar på en udfordring. Han er den stille styrke med et hjerte af guld, der værdsætter ærlighed, loyalitet og latter. Snart tager han det største skridt og siger ja til Mette, kvinden, der gør alle hans dage lysere',
    },
    {
      id: 2,
      name: 'Mette Nørgaard Jensen',
      imageUrl: 'assets/images/couple/bride.jpg',
      description:
        'Mette elsker de lyse sommernætter, at dyrke gymnastik og spise poppede popcorn. Altid med et smil på læben, kan hun lyse selv de grå dage op. Hun er kreativ på sit arbejde, omsorgsfuld for sine medmennesker og hun elsker at skabe minder, hvor hyggen altid er i fokus. Hun nyder at tage på eventyr og nu ser hun frem til det største eventyr af dem alle - at gifte sig med Kasper, sin bedste ven og store kærlighed',
    },
  ]);

  faHeart = faHeart;
}
