import { Component, HostListener, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { NgClass } from '@angular/common';

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
    if (window.scrollY > 100) {
      this.isFixed.set(true);
    } else {
      this.isFixed.set(false);
    }
  }

  public activeFragment = signal<string>('home');
  public isNavOpen = signal<boolean>(false);

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(res => {
      const fragment = res.url.split('#')[1];
      if (fragment) {
        this.activeFragment.set(fragment);
      }
    });
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
}
