import { Component, signal } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { DatePipe } from '@angular/common';

interface Story {
  id: number;
  title: string;
  date: Date;
  content: string;
  imageUrl: string;
}

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [FaIconComponent, DatePipe],
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss',
})
export class StoryComponent {
  public stories = signal<Story[]>([
    {
      id: 1,
      title: 'Første møde',
      date: new Date('2020-10-31'),
      content:
        'Vi mødte hinanden i 2020 på Viggos, og selvom COVID-19 krævede afstand, kunne kærligheden ikke holde os fra hinanden. ' +
        'Noget magisk trak os sammen, og vi fulgte vores hjerter.',
      imageUrl: 'assets/images/story/story-1.jpg',
    },
    {
      id: 2,
      title: 'Første date',
      date: new Date('2020-12-12'),
      content:
        'Vores første date var i København Zoo, hvor vi spadserede rundt og nød dyrene og hinandens selskab. ' +
        'Vi havde allerede set hinanden i en måned, men den dag føltes som noget særligt. ' +
        'I regnskovssektionen, omgivet af frodige planter og eksotiske fugle, besluttede vi os for at blive kærester og starte noget smukt sammen.',
      imageUrl: 'assets/images/story/story-2.jpg',
    },
    {
      id: 3,
      title: 'Første lejlighed',
      date: new Date('2021-07-01'),
      content:
        'Efter tre måneder som kærester besluttede vi os for, at vi gerne ville tage næste skridt og flytte sammen. Heldigvis fandt vi hurtigt et dejligt hjem på Schacksgade 44, 1. tv. i Odense C. Her skabte vi et sted, der føltes som vores helt eget – et sted fyldt med hygge og gode stunder. Vores nye base blev hurtigt et sted, hvor vi kunne nyde hverdagen sammen.',
      imageUrl: 'assets/images/story/story-3.jpg',
    },
    {
      id: 4,
      title: 'Første rejse',
      date: new Date('2021-07-10'),
      content:
        "Vores første rejse sammen gik til Nyons i Frankrig, hvor vi var afsted med Mette's familie og boede i en hyggelig mobilehome. Dagene blev brugt på at udforske det charmerende byliv, smage på lokal olivenolie, og nyde solen ved poolen. Kasper fik smag for det franske køkken og livsstil, noget som Mette har sat stor pris på, da det har ført til mange gode minder og franske oplevelser siden.",
      imageUrl: 'assets/images/story/story-4.jpg',
    },
    {
      id: 5,
      title: 'Forlovelse',
      date: new Date('2023-07-12'),
      content:
        'I Nyons by, midt på den smukke, gamle bro fra det 14. århundrede, omgivet af majestætiske bjerge og betagende landskaber, gik Kasper på knæ og friede. Øjeblikket var magisk, med lyden af floden der brusede under os og de varme solstråler, der skinnede ned over os.',
      imageUrl: 'assets/images/story/story-5.jpg',
    },
  ]);

  protected readonly faHeart = faHeart;
}
