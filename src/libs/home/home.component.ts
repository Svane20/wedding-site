import { AfterViewInit, Component, signal } from '@angular/core';
import { DatePipe, NgClass, NgStyle } from '@angular/common';

interface Slide {
  id: number;
  title: string;
  subTitle: string;
  date: Date;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe, NgClass, NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  public currentSlideIndex = signal<number>(0);

  public slides = signal<Slide[]>([
    {
      id: 1,
      title: 'Vi skal giftes',
      subTitle: 'Kasper & Mette',
      date: new Date('9 Aug 2025'),
      imageUrl: 'assets/images/slides/slide-1.jpg',
    },
    {
      id: 2,
      title: 'Vi skal giftes',
      subTitle: 'Kasper & Mette',
      date: new Date('9 Aug 2025'),
      imageUrl: 'assets/images/slides/slide-2.jpg',
    },
    {
      id: 3,
      title: 'Vi skal giftes',
      subTitle: 'Kasper & Mette',
      date: new Date('9 Aug 2025'),
      imageUrl: 'assets/images/slides/slide-3.jpg',
    },
  ]);

  ngAfterViewInit() {
    this.startSlideShow();
  }

  private startSlideShow(): void {
    setInterval(() => {
      let currentIndex = this.currentSlideIndex();
      currentIndex = (currentIndex + 1) % this.slides().length;
      this.currentSlideIndex.set(currentIndex);
    }, 5000); // Change slide every 5 seconds
  }
}
