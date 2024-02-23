import VehicleFactory from './VehicleFactory.js';


const car = VehicleFactory.createVehicle('car', 'Toyota', 'Corola');
const truck = VehicleFactory.createVehicle('truck', 'Ford', 'F150');
const motorcycle = VehicleFactory.createVehicle('motorcycle', 'Honda', 'CB60R');

console.log(car.getDescription());
console.log(truck.getDescription());
console.log(motorcycle.getDescription());