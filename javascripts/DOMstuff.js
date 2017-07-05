var CarLot = (function(globalScopeCarLot) {
    function carCard(car) {
        console.log("car", car);

 var htmlString = ` <div>${car.make} ${car.model} ${car.year}</div>
            <div>${car.description}</div>
            <div>${car.price}</div>`

        // `${}` variable
        // `` html string

        return htmlString
        // console.log(myCar);
    }

    let populateCarCard = document.getElementById("carContainer");

    globalScopeCarLot.populateDom = function(cars) {
        for (var i = 0; i < cars.length; i++) {
            console.log("cars", cars[i]);
            var create = carCard(cars[i]);
            console.log("printCar", create );
            populateCarCard.innerHTML += create;
        }
    }

    return globalScopeCarLot

}(CarLot || {}));

CarLot.Inventory.loadInventory(CarLot.populateDom)
