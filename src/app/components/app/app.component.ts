import { Component } from '@angular/core';
import { HeaderComponent } from '../../../libs/header/header.component';
import { HomeComponent } from '../../../libs/home/home.component';
import { CoupleComponent } from '../../../libs/couple/couple.component';
import { AudioPlayerComponent } from '../../../libs/audio-player/audio-player.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, CoupleComponent, AudioPlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
