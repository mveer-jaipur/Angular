import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SuperheroService } from 'src/app/services/superhero.service';

@Component({
  selector: 'app-batman',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batman.component.html',
  styleUrls: ['./batman.component.scss'],
})
export class BatmanComponent implements OnInit {
  batman: any;

  // Throw NullInjectorError for SuperheroService as it is not injected for batman routes.
  constructor(private readonly superheroService: SuperheroService) {}

  ngOnInit(): void {
    this.batman = this.superheroService.batman;
  }
}
