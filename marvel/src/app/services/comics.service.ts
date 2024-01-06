import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComicsService {
  get comics() {
    return [
      {
        title: 'The Marvels',
        description: 'Marvel comics are famous.',
        price: '56$',
      },
      {
        title: 'The Superman',
        description: 'Superman is the character who has power of spider.',
        price: '46$',
      },
    ];
  }
}
