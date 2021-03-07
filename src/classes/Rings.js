export default class Rings {
  constructor() {
    this.elements = {
      rings: {
        move: document.querySelector('.move-ring .completed'),
        exercise: document.querySelector('.exercise-ring .completed'),
        stand: document.querySelector('.stand-ring .completed'),
      },
    };
  }

  getRandomInt({ max }) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  execute() {
    const one = this.getRandomInt({ max: 80 });
    const two = this.getRandomInt({ max: one });
    const three = this.getRandomInt({ max: 90 });

    this.elements.rings.move.setAttribute('stroke-dasharray', `${one}, 100`);
    this.elements.rings.exercise.setAttribute(
      'stroke-dasharray',
      `${two}, 100`,
    );
    this.elements.rings.stand.setAttribute('stroke-dasharray', `${three}, 100`);
  }
}