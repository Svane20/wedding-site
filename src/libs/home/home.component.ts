import { AfterViewInit, Component, Renderer2, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  public currentSlideIndex = signal(0);

  public slides = signal([
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

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.startSlideShow();
  }

  private startSlideShow(): void {
    setInterval(() => {
      let currentIndex = this.currentSlideIndex();
      const slidesElements = document.querySelectorAll('.slide');

      // Remove active class from current slide
      if (slidesElements[currentIndex]) {
        this.renderer.removeClass(slidesElements[currentIndex], 'active');
      }

      // Update the index
      currentIndex = (currentIndex + 1) % this.slides().length;
      this.currentSlideIndex.set(currentIndex);

      // Add active class to the new slide
      if (slidesElements[currentIndex]) {
        this.renderer.addClass(slidesElements[currentIndex], 'active');
      }
    }, 5000); // Change slide every 5 seconds
  }
}
