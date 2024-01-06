import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comic-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.scss'],
})
export class ComicDetailsComponent {
  @Input()
  comic: any;
}
