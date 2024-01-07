import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SuperheroService } from 'src/app/services/superhero.service';

@Component({
  selector: 'app-spiderman',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spiderman.component.html',
  styleUrls: ['./spiderman.component.scss'],
})
export class SpidermanComponent implements OnInit {
  spiderman: any;

  constructor(private readonly superheroService: SuperheroService) {}

  ngOnInit(): void {
    this.spiderman = this.superheroService.spiderman;
  }
}
