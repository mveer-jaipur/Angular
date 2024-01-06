import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/services/comics.service';
import { ComicDetailsComponent } from '../comic-details/comic-details.component';

@Component({
  selector: 'app-comics',
  standalone: true,
  imports: [CommonModule, ComicDetailsComponent],
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
})
export class ComicsComponent implements OnInit {
  comics: any;

  constructor(private readonly comicsService: ComicsService) {}

  ngOnInit(): void {
    this.comics = this.comicsService.comics;
  }
}
