class Duck {
  quack: string;
  constructor(quackery: string) {
    this.quack = quackery;
  }
  whatQuack() {
    console.log(this.quack);
  }
}

const australianDuck = new Duck("cunt");
australianDuck.whatQuack();
