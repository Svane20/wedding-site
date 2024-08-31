import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../libs/header/header.component';
import { HomeComponent } from '../../../libs/home/home.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { CoupleComponent } from '../../../libs/couple/couple.component';
import { AudioPlayerComponent } from '../../../libs/audio-player/audio-player.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, CoupleComponent, AudioPlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      const fragment = this.route.snapshot.fragment;
      if (fragment) {
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });
  }
}
