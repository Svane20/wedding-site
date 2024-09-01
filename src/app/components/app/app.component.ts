import { Component } from '@angular/core';
import { HeaderComponent } from '../../../libs/header/header.component';
import { HomeComponent } from '../../../libs/home/home.component';
import { CoupleComponent } from '../../../libs/couple/couple.component';
import { AudioPlayerComponent } from '../../../libs/audio-player/audio-player.component';
import { StoryComponent } from '../../../libs/story/story.component';
import { EventComponent } from '../../../libs/event/event.component';
import { FooterComponent } from '../../../libs/footer/footer.component';
import { PeopleComponent } from '../../../libs/people/people.component';
import { ResponseComponent } from '../../../libs/response/response.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent,
    CoupleComponent,
    AudioPlayerComponent,
    StoryComponent,
    EventComponent,
    FooterComponent,
    PeopleComponent,
    ResponseComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
