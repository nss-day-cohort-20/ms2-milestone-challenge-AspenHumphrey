function carCard(car) {
    console.log("car", car);
    let myCar = document.createElement("myCar");
    myCar.classList.add("myCar");

    let header = document.createElement("header");
    header.classList.add("carHeader");
    header.innerHTML = myCar.make + "" + myCar.model + "" + myCar.year;
    myCar.appendChild(header);
    console.log(myCar.make, myCar.model, myCar.year);

    let section = document.createElement("section");
    section.classList.add("carSection");
    section.innerHTML = myCar.description;
    myCar.appendChild(section);
    console.log(myCar.description);

    let footer = document.createElement("footer");
    footer.classList.add("carFooter");
    footer.innerHTML = myCar.price;
    myCar.appendChild(footer);
    console.log(myCar.footer);

    return myCar
    console.log(myCar);
}

let populateCarCard = document.getElementById("carContainer");

function populateDom() {
    for (var i = 0; i < cars.length; i++) {
        console.log("cars", cars[i]);
        var create = createCard(cars[i]);
        console.log("printCar", create);
        populateCarCard.appendChild(create);
    }
}
populateDom();