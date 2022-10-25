// 1. Create a class representing a circle. A circle should have three fields:
// x, y and radius.
// 2. Create a function that returns true if two given circles intersect, false
// otherwise. The function should take in two arguments, one for each circle.

class Circle {
  x: number;
  y: number;
  radius: number;
  constructor(x: number, y: number, radius: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
}

const Intersect = (circle1: Circle, circle2: Circle): boolean => {
  const distance = Math.sqrt(
    (circle1.x - circle2.x) ** 2 + (circle1.y - circle2.y) ** 2
  );
  return circle1.radius + circle2.radius > distance;
};
