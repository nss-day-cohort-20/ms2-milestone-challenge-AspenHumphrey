var CarLot = (function (globalScopeCarLot) {

  // Define a private scope variable to store cars
  let _car_inventory = [];  

  // Start building the Object that will be attached
  // to the CarLot.Inventory namespace
  let inventory = Object.create(null, {
    loadInventory: {
      value: function (callback) {
        var inventoryLoader = new XMLHttpRequest();
        inventoryLoader.addEventListener("load", function () {
        // Add each car to the private _car_inventory array
        _car_inventory = JSON.parse(event.target.responseText).cars;

        });
        inventoryLoader.open("GET", "/inventory.json");
        inventoryLoader.send();
      }
    }
});
        globalScopeCarLot.Inventory = inventory;
        return globalScopeCarLot     

}(CarLot || {}));




















// var CarLot = (function(globalScopeCarLot) {

//     // Define a private scope variable to store cars
//     let _car_inventory = [];

//     // Start building the Object that will be attached
//     // to the CarLot.Inventory namespace
//     let inventory = Object.create(null);
//     inventory.loadInventory = function(callback) {
//         var inventoryLoader = new XMLHttpRequest();
//         inventoryLoader.addEventListener("load", function() {
//             // Add each car to the private _car_inventory array
//           _car_inventory = JSON.parse(event.target.responseText).cars;
            
//         });
//         inventoryLoader.open("GET", "inventory.json");
//         inventoryLoader.send();
//     }

// }(CarLot || {}));