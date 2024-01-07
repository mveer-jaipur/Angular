import { Routes } from '@angular/router';
import { SuperheroService } from 'src/app/services/superhero.service';
import { BatmanComponent } from './batman/batman.component';
import { SpidermanComponent } from './spiderman/spiderman.component';

export const superHeroRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'spiderman' },
  {
    path: 'spiderman',
    providers: [SuperheroService],
    component: SpidermanComponent,
  },
  {
    path: 'batman',
    component: BatmanComponent,
  },
];
