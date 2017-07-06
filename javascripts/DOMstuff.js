var CarLot = (function(globalScopeCarLot) {
    function carCard(car) {
        // console.log("car", car);

        var htmlString = ` <div class="container"><div>${car.make} ${car.model} ${car.year}</div>
            <div class="description">${car.description}</div>
            <div>${car.price}</div></div>`

        // `${}` variable
        // `` html string

        return htmlString
            // console.log(myCar);
    }
            let input = document.getElementById("input");
            let currentCar = document.getElementsByClassName("container");
            let selectedCar = null;

    let populateCarCard = document.getElementById("carContainer");

    globalScopeCarLot.populateDom = function(cars) {
        for (var i = 0; i < cars.length; i++) {
            // console.log("cars", cars[i]);
            var create = carCard(cars[i]);
            // console.log("printCar", create);
            populateCarCard.innerHTML += create;

            for (var i = 0; i < currentCar.length; i++) {
                currentCar[i].addEventListener("click", function() {
                    // rm class on all 
                    for (var i = 0; i < currentCar.length; i++) {
                        currentCar[i].classList.remove("styling");
                    }
                    event.currentTarget.classList.toggle("styling");
                    selectedCar = document.getElementsByClassName("styling")[0];
                    console.log("clicked car", selectedCar);
                    input.focus();
                })
            };
        }
    }

    // width height border and background color changes on click

    // input enter func mirror ? read me 9 & 10 

let description = document.getElementsByClassName("description");

    input.addEventListener("keyup", function(event) {
        console.log("key", selectedCar.childNodes[2]);
        let inputText = input.value;
        if (event.key === "Enter") {
            clearTextBox(inputText);
        }
        selectedCar.childNodes[2].innerHTML = inputText;
        console.log("event", input.value);
    });

    function clearTextBox(event, inputText) {
        if (inputText !== " ") {
            input.value = "";
        }
    };

    return globalScopeCarLot

}(CarLot || {}));

CarLot.Inventory.loadInventory(CarLot.populateDom)