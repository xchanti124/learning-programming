class CircleClass {
  x: number;
  y: number;
  radius: number;
  constructor(x: number, y: number, radius: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
}

// 1st circle: 10, 10, 10
// 2nd circle: 20, 20, 20
// 3rd circle: 30, 30, 30

const circle1 = new CircleClass(10, 10, 10);
const circle2 = new CircleClass(20, 20, 20);
const circle3 = new CircleClass(30, 30, 30);

// methods: peek(), pop(), push(), isEmpty()

class Stack2<T> {
  items: T[];
  constructor() {
    this.items = [];
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return this.items[this.items.length - 1];
    }
    return null;
  }

  pop(): T | null {
    return this.items.pop() ?? null;
  }

  push(value: T) {
    this.items.push(value);
  }

  isEmpty(): boolean {
    return this.items.length > 0;
  }
}

let testStack = new Stack2<number>();

testStack.push(1);
testStack.push(3);
testStack.push(5);
testStack.push(10);

let sum = 0;

while (!testStack.isEmpty()) {
  sum += testStack.pop() ?? 0;
}
