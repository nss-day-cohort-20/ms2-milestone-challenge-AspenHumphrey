function carCard(car) {
    console.log("car", car);
    let car = document.createElement("car");
    car.classList.add("car");

    let header = document.createElement("header");
    header.classList.add("carHeader");
    header.innerHTML = car.make + "" + car.model + "" + car.year;
    car.appendChild(header);
    console.log(car.make, car.model, car.year);

    let section = document.createElement("section");
    section.classList.add("carSection");
    section.innerHTML = car.description;
    car.appendChild("section");unepected
    console.log(car.description);

    let footer = document.createElement("footer");
    footer.classList.add("carFooter");
    footer.innerHTML = car.price;
    car.appendChild("footer");
    console.log(carFooter);

    return car
    console.log("car?", car);
};

// function printCar() {
//     for (var i = 0; i < cars.length; i++) {
//         console.log("cars", cars[i]);
//         var create = createCard(cars[i]);
//         console.log("printCar", create);
//     }
// }
// printCar();