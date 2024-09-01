import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';
import { DatePipe, NgClass, NgStyle } from '@angular/common';

export interface Slide {
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
export class HomeComponent implements AfterViewInit, OnDestroy {
  public currentSlideIndex = signal<number>(0);
  public intervalId: any | null = null;

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

  ngAfterViewInit(): void {
    this.startSlideShow();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startSlideShow(): void {
    this.intervalId = setInterval(() => this.currentSlideIndex.update(currentIndex => (currentIndex + 1) % this.slides().length), 5000);
  }
}
