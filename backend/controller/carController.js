const Car = require('../model/CarModel');

// Create a new car
exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find()
        res.status(200).json(cars)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.createCar = async (req, res) => {
    try {
        const car = new Car(req.body)
        const savedCar = await car.save()
        res.status(201).json(savedCar)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}