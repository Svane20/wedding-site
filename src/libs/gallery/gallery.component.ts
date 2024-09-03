import { Component, computed, signal } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { animate, style, transition, trigger } from '@angular/animations';

interface GalleryItem {
  id: number;
  thumbUrl: string;
  largeUrl: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class GalleryComponent {
  protected readonly faChevronLeft = faChevronLeft;
  protected readonly faChevronRight = faChevronRight;

  public items = signal<GalleryItem[]>([
    {
      id: 1,
      thumbUrl: 'assets/images/gallery/thumb/1.jpg',
      largeUrl: 'assets/images/gallery/large/1.jpg',
    },
    {
      id: 2,
      thumbUrl: 'assets/images/gallery/thumb/2.jpg',
      largeUrl: 'assets/images/gallery/large/2.jpg',
    },
    {
      id: 3,
      thumbUrl: 'assets/images/gallery/thumb/3.jpg',
      largeUrl: 'assets/images/gallery/large/3.jpg',
    },
    {
      id: 4,
      thumbUrl: 'assets/images/gallery/thumb/4.jpg',
      largeUrl: 'assets/images/gallery/large/4.jpg',
    },
    {
      id: 5,
      thumbUrl: 'assets/images/gallery/thumb/5.jpg',
      largeUrl: 'assets/images/gallery/large/5.jpg',
    },
    {
      id: 6,
      thumbUrl: 'assets/images/gallery/thumb/6.jpg',
      largeUrl: 'assets/images/gallery/large/6.jpg',
    },
    {
      id: 7,
      thumbUrl: 'assets/images/gallery/thumb/7.jpg',
      largeUrl: 'assets/images/gallery/large/7.jpg',
    },
    {
      id: 8,
      thumbUrl: 'assets/images/gallery/thumb/8.jpg',
      largeUrl: 'assets/images/gallery/large/8.jpg',
    },
    {
      id: 9,
      thumbUrl: 'assets/images/gallery/thumb/9.jpg',
      largeUrl: 'assets/images/gallery/large/9.jpg',
    },
  ]);
  public currentItemIndex = signal(0);
  public currentItem = computed(() => this.items()[this.currentItemIndex()]);

  public isPopupOpen = signal(false);
  public isTransitioning = signal(false);
  public windowHeight = signal(window.innerHeight);

  public openPopup(index: number): void {
    this.currentItemIndex.set(index);
    this.isPopupOpen.set(true);
  }

  public closePopup(event: MouseEvent): void {
    event.stopPropagation();

    this.isPopupOpen.set(false);
  }

  nextSlide(): void {
    this.changeSlide(() => this.currentItemIndex.update(currentIndex => (currentIndex === this.items().length - 1 ? 0 : currentIndex + 1)));
  }

  prevSlide(): void {
    this.changeSlide(() => this.currentItemIndex.update(currentIndex => (currentIndex === 0 ? this.items().length - 1 : currentIndex - 1)));
  }

  private changeSlide(updateIndex: () => void) {
    this.isTransitioning.set(true);
    setTimeout(() => {
      updateIndex();
      this.isTransitioning.set(false);
    }, 300); // Duration matches the animation time
  }
}
