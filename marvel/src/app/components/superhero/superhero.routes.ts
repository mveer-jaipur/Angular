import { Routes } from '@angular/router';
import { BatmanComponent } from './batman/batman.component';
import { SpidermanComponent } from './spiderman/spiderman.component';

export const superHeroRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'spiderman' },
  {
    path: 'spiderman',
    component: SpidermanComponent,
  },
  {
    path: 'batman',
    component: BatmanComponent,
  },
];
