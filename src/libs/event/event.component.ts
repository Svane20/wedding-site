import { Component, signal } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';

interface Event {
  id: number;
  title: string;
  date: Date;
  endDate?: Date;
  time: string;
  locationTitle: string;
  location: string;
  locationUrl: string;
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
      locationTitle: 'Sønder Nærå Kirke',
      location: 'Kirkevej 9, 5792 Årslev',
      locationUrl: 'https://maps.app.goo.gl/Xi4hUQRJ3mdY8nq69',
    },
    {
      id: 2,
      title: 'Reception',
      date: new Date('9 Aug 2025'),
      time: '15:00 - 17:15',
      locationTitle: 'Rådhussalen',
      location: 'Bystævnet 21, 5792 Årslev',
      locationUrl: 'https://maps.app.goo.gl/BcgrXb4YGpXpvujV8',
    },
    {
      id: 3,
      title: 'Festen',
      date: new Date('9 Aug 2025'),
      endDate: new Date('10 Aug 2025'),
      time: '17:30 - 03:00',
      locationTitle: 'Rådhussalen',
      location: 'Bystævnet 21, 5792 Årslev',
      locationUrl: 'https://maps.app.goo.gl/BcgrXb4YGpXpvujV8',
    },
  ]);

  public capitalizeDate(date: Date): string {
    const formattedDate = formatDate(date, 'd MMMM, y', 'da-DK');

    const parts = formattedDate.split(' ');
    if (parts.length > 1) {
      parts[1] = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
    }

    return parts.join(' ');
  }
}
