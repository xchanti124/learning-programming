// create a class called car
// class should have 3 properties: color, speed, amount of seats
// create a method which displays the information of the car in a single string
// all of the information about the car can be set in the constructor
class Car {
  color: string;
  speed: number;
  amountOfSeats: number;
  constructor(carColor: string, carSpeed: number, carSeats: number) {
    this.color = carColor;
    this.speed = carSpeed;
    this.amountOfSeats = carSeats;
  }
  displayInformation() {
    console.log(
      "This car is " +
        this.color +
        ", drives at " +
        this.speed +
        "km/h and has " +
        this.amountOfSeats +
        " seats"
    );
  }
}

const myCar = new Car("black", 100, 4);
myCar.displayInformation();
