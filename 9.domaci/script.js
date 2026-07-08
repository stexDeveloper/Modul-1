let cities = [
  "Beograd",
  "Subotica",
  "Novi Sad",
  "Sarajevo",
  "Podgorica",
  "Zagreb",
];

let type = ["Stanovi", "Kuce", "Poslovni Prostor", "Garaza/parking"];

let numOfRooms = [
  "Garsonjera",
  "Jednosoban stan",
  "Jednoiposoban stan",
  "Dvosoban stan",
  "Dvoiposoban stan",
  "Trosoban stan",
  "Troiposoban stan",
  "Cetvorosoban stan",
  "4,5 i vise",
];

let realEstates = [
  {
    city: "Beograd",
    option: "Garsonjera",
    type: "Stanovi",
    price: 48200,
    size: 25,
  },
  {
    city: "Novi Sad",
    option: null,
    type: "Kuce",
    price: 120000,
    size: 85,
  },
  {
    city: "Subotica",
    option: "Jednosoban stan",
    type: "Stanovi",
    price: 55000,
    size: 38,
  },
  {
    city: "Zagreb",
    option: "Dvosoban stan",
    type: "Stanovi",
    price: 98000,
    size: 62,
  },
  {
    city: "Sarajevo",
    option: null,
    type: "Kuce",
    price: 145000,
    size: 120,
  },
  {
    city: "Podgorica",
    option: "Trosoban stan",
    type: "Stanovi",
    price: 132000,
    size: 89,
  },
  {
    city: "Beograd",
    option: null,
    type: "Poslovni Prostor",
    price: 210000,
    size: 140,
  },
  {
    city: "Novi Sad",
    option: null,
    type: "Garaza/parking",
    price: 18000,
    size: 15,
  },
  {
    city: "Subotica",
    option: "Dvoiposoban stan",
    type: "Stanovi",
    price: 76000,
    size: 58,
  },
  {
    city: "Sarajevo",
    option: "Cetvorosoban stan",
    type: "Stanovi",
    price: 158000,
    size: 110,
  },
  {
    city: "Zagreb",
    option: null,
    type: "Poslovni Prostor",
    price: 265000,
    size: 170,
  },
  {
    city: "Podgorica",
    option: null,
    type: "Garaza/parking",
    price: 22000,
    size: 18,
  },
];

let citiesSelector = document.getElementById("citiesSelector");
let typesSelector = document.getElementById("typeSelector");
let numOfRoomsSelector = document.getElementById("numOfRoomsSelector");

for (let city of cities) {
  let option = document.createElement("option");
  option.innerHTML = city;
  citiesSelector.appendChild(option);
}

for (let t of type) {
  let option = document.createElement("option");
  option.innerHTML = t;
  typesSelector.appendChild(option);
}

for (let room of numOfRooms) {
  let option = document.createElement("option");
  option.innerHTML = room;
  numOfRoomsSelector.appendChild(option);
}

let currentCity = null;
let currentType = null;
let currentRoom = null;

citiesSelector.addEventListener("change", function (event) {
  currentCity = event.currentTarget.value;
});

typesSelector.addEventListener("change", function (event) {
  currentType = event.currentTarget.value;
});

numOfRoomsSelector.addEventListener("change", function (event) {
  currentRoom = event.currentTarget.value;
});

document
  .querySelector("#searchProperties")
  .addEventListener("click", function () {
    console.log("Izabrali ste " + currentCity);
    console.log("Izabrali ste " + currentType);
    console.log("Izabrali ste " + currentRoom);
  });

let createEstates = document.createElement("div");
createEstates.id = "estates";
document.body.appendChild(createEstates);

for (let estate of realEstates) {
  let createDivEstate = document.createElement("div");
  let h1City = document.createElement("h1");
  let paragraphOption = document.createElement("p");
  let paragraphPrice = document.createElement("div");
  let paragraphSize = document.createElement("div");

  h1City.innerHTML = estate.type + " " + estate.city;

  paragraphPrice.innerHTML = estate.price + " €";
  paragraphSize.innerHTML = estate.size + " m2";

  createDivEstate.appendChild(h1City);

  if (estate.option === null) {
    paragraphOption.innerHTML = "---";
    createDivEstate.appendChild(paragraphOption);
  } else {
    paragraphOption.innerHTML = estate.option;
    createDivEstate.appendChild(paragraphOption);
  }

  createDivEstate.appendChild(paragraphPrice);
  createDivEstate.appendChild(paragraphSize);

  createEstates.appendChild(createDivEstate);

  createDivEstate.style.marginBottom = "80px";
}
