export class SuperheroService {
  constructor() {}

  get spiderman() {
    return {
      title: 'Spiderman',
      power: 'Spider',
    };
  }

  get batman() {
    return {
      title: 'Batman',
      power: 'Bat',
    };
  }
}
