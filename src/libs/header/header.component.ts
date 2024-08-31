import { Component, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public activeFragment = signal<string>('home');

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(res => {
      const fragment = res.url.split('#')[1];
      if (fragment) {
        this.activeFragment.set(fragment);
      }
    });
  }

  isActive(fragment: string): boolean {
    return this.activeFragment() === fragment;
  }
}
