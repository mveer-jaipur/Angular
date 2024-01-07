import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor() {}

  get baseDetails() {
    return {
      title: 'Marvel',
      description: 'This application will give information about marvels.',
    };
  }
}
