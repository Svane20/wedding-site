import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';
import { DatePipe, formatDate, NgClass, NgStyle } from '@angular/common';

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
export class HomeComponent implements AfterViewInit, OnDestroy {
  public currentSlideIndex = signal<number>(0);
  public intervalId: any | null = null;

  public slides = signal<Slide[]>([
    {
      id: 1,
      title: 'Vi skal giftes',
      subTitle: 'Kasper & Mette',
      date: new Date('2025-08-09'),
      imageUrl: 'assets/images/slides/slide-1.jpg',
    },
    {
      id: 2,
      title: 'Vi skal giftes',
      subTitle: 'Kasper & Mette',
      date: new Date('2025-08-09'),
      imageUrl: 'assets/images/slides/slide-2.jpg',
    },
    {
      id: 3,
      title: 'Vi skal giftes',
      subTitle: 'Kasper & Mette',
      date: new Date('2025-08-09'),
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

  public capitalizeDate(date: Date): string {
    const formattedDate = formatDate(date, 'd MMMM, y', 'da-DK');

    const parts = formattedDate.split(' ');
    if (parts.length > 1) {
      parts[1] = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
    }

    return parts.join(' ');
  }

  private startSlideShow(): void {
    this.intervalId = setInterval(() => this.currentSlideIndex.update(currentIndex => (currentIndex + 1) % this.slides().length), 5000);
  }
}
