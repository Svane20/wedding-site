import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-couple',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './couple.component.html',
  styleUrl: './couple.component.scss',
})
export class CoupleComponent {
  faHeart = faHeart;
}
