import { Component, HostListener, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { NgClass, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public isFixed = signal<boolean>(false);

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (window.scrollY === 0) {
      this.activeFragment.set('home');
    }

    if (window.scrollY > 100) {
      this.isFixed.set(true);
    } else {
      this.isFixed.set(false);
    }
  }

  public activeFragment = signal<string>('home');
  public isNavOpen = signal<boolean>(false);

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(res => {
      const fragment = res.url.split('#')[1];
      if (fragment) {
        this.activeFragment.set(fragment);
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });

    this.observeSections();
  }

  public isActive(fragment: string): boolean {
    return this.activeFragment() === fragment;
  }

  public toggleNav(): void {
    this.isNavOpen.update(open => !open);
  }

  public closeNavOnLinkClick(): void {
    if (window.innerWidth < 768) {
      this.isNavOpen.set(false);
    }
  }

  private observeSections(): void {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeFragment.set(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -90% 0px' },
    );

    sections.forEach(section => {
      observer.observe(section);
    });
  }
}
