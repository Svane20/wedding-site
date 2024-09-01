import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

interface Event {
  id: number;
  title: string;
  date: Date;
  endDate?: Date;
  time: string;
  locationTitle: string;
  location: string;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss',
})
export class EventComponent {
  public events = signal<Event[]>([
    {
      id: 1,
      title: 'Vielsen',
      date: new Date('9 Aug 2025'),
      time: '13:00 - 14:00',
      locationTitle: 'Sdr. Nærå Kirke',
      location: 'Kirkevej 9, 5792 Årslev',
    },
    {
      id: 2,
      title: 'Reception',
      date: new Date('9 Aug 2025'),
      time: '15:00 - 17:15',
      locationTitle: 'Rådhussalen',
      location: 'Bystævnet 21, 5792 Årslev',
    },
    {
      id: 3,
      title: 'Festen',
      date: new Date('9 Aug 2025'),
      endDate: new Date('10 Aug 2025'),
      time: '17:30 - 03:00',
      locationTitle: 'Rådhussalen',
      location: 'Bystævnet 21, 5792 Årslev',
    },
  ]);
}
