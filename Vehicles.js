
class Vehicle {
  constructor(type, brand, model) {
    this.type = type;
    this.brand = brand;
    this.model = model;
  }

  getDescription() {
    return `${this.type}: ${this.brand} ${this.model}`;
  }
}

export class Car extends Vehicle {
  constructor(brand, model) {
    super('Car', brand, model);
  }
}

export class Truck extends Vehicle {
  constructor(brand, model) {
    super('Truck', brand, model);
  }
}

export class Motorcycle extends Vehicle {
  constructor(brand, model) {
    super('Motorcycle', brand, model);
  }
}