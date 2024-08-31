import { AfterViewInit, Component, ElementRef, signal, ViewChild } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-audio-player',
  standalone: true,
  imports: [FaIconComponent, NgClass],
  templateUrl: './audio-player.component.html',
  styleUrl: './audio-player.component.scss',
})
export class AudioPlayerComponent implements AfterViewInit {
  @ViewChild('audio') audioRef: ElementRef<HTMLAudioElement>;

  public isPaused = signal<boolean>(true);

  faMusic = faMusic;

  ngAfterViewInit(): void {
    this.audioRef.nativeElement.volume = 0.2;
  }

  public togglePlayPause(): void {
    const audioElement = this.audioRef.nativeElement;

    if (this.isPaused()) {
      audioElement.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    } else {
      audioElement.pause();
    }

    // Toggle the pause state
    this.isPaused.update(isPaused => !isPaused);
  }
}
