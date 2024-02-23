import { Car, Truck, Motorcycle } from './Vehicles.js'

class VehicleFactory {
    static createVehicle(type, brand, model) {
      switch (type.toLowerCase()) {
        case 'car':
          return new Car(brand, model);
        case 'truck':
          return new Truck(brand, model);
        case 'motorcycle':
          return new Motorcycle(brand, model);
        default:
          throw new Error('Invalid vehicle type.');
      }
    }
}

export default VehicleFactory;