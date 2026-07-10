let cities = [
  "Svi",
  "Beograd",
  "Niš",
  "Kragujevac",
  "Čačak",
  "Kraljevo",
  "Užice",
  "Leskovac",
  "Vranje",
  "Pirot",
  "Sombor",
  "Zrenjanin",
  "Pančevo",
  "Šabac",
  "Valjevo",
  "Loznica",
  "Požarevac",
  "Sremska Mitrovica",
  "Jagodina",
  "Kikinda",
  "Bor",
  "Negotin",
  "Bijeljina",
  "Banja Luka",
  "Mostar",
  "Tuzla",
  "Split",
  "Rijeka",
  "Osijek",
  "Ljubljana",
  "Maribor",
  "Celje",
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
    option: "Trosoban stan",
    type: "Stanovi",
    price: 72000,
    size: 55,
  },
  {
    city: "Niš",
    option: "Dvosoban stan",
    type: "Stanovi",
    price: 72000,
    size: 55,
  },
  {
    city: "Kragujevac",
    option: null,
    type: "Kuce",
    price: 98000,
    size: 95,
  },
  {
    city: "Čačak",
    option: "Jednosoban stan",
    type: null,
    price: 56000,
    size: 41,
  },
  {
    city: "Kraljevo",
    option: "Garsonjera",
    type: "Stanovi",
    price: 43000,
    size: 28,
  },
  {
    city: "Užice",
    option: "Trosoban stan",
    type: null,
    price: 99000,
    size: 82,
  },
  {
    city: "Leskovac",
    option: "Jednosoban stan",
    type: "Stanovi",
    price: 51000,
    size: 40,
  },
  {
    city: "Vranje",
    option: null,
    type: "Kuce",
    price: 76000,
    size: 82,
  },
  {
    city: "Pirot",
    option: "Garsonjera",
    type: null,
    price: 39000,
    size: 27,
  },
  {
    city: "Sombor",
    option: "Troiposoban stan",
    type: "Stanovi",
    price: 97000,
    size: 81,
  },
  {
    city: "Zrenjanin",
    option: null,
    type: "Garaza/parking",
    price: 14000,
    size: 14,
  },
  {
    city: "Pančevo",
    option: null,
    type: "Poslovni Prostor",
    price: 165000,
    size: 130,
  },
  {
    city: "Šabac",
    option: "Dvosoban stan",
    type: null,
    price: 67000,
    size: 54,
  },
  {
    city: "Valjevo",
    option: "Trosoban stan",
    type: "Stanovi",
    price: 94000,
    size: 77,
  },
  {
    city: "Loznica",
    option: null,
    type: "Kuce",
    price: 89000,
    size: 92,
  },
  {
    city: "Požarevac",
    option: "Jednoiposoban stan",
    type: null,
    price: 61000,
    size: 46,
  },
  {
    city: "Sremska Mitrovica",
    option: "Dvoiposoban stan",
    type: "Stanovi",
    price: 81000,
    size: 61,
  },
  {
    city: "Jagodina",
    option: null,
    type: "Garaza/parking",
    price: 15000,
    size: 15,
  },
  {
    city: "Kikinda",
    option: "Garsonjera",
    type: null,
    price: 36000,
    size: 24,
  },
  {
    city: "Bor",
    option: "Garsonjera",
    type: "Stanovi",
    price: 39000,
    size: 24,
  },
  {
    city: "Negotin",
    option: null,
    type: "Kuce",
    price: 68000,
    size: 84,
  },
  {
    city: "Bijeljina",
    option: "Dvosoban stan",
    type: null,
    price: 73000,
    size: 57,
  },
  {
    city: "Banja Luka",
    option: "Cetvorosoban stan",
    type: "Stanovi",
    price: 178000,
    size: 118,
  },
  {
    city: "Mostar",
    option: null,
    type: "Poslovni Prostor",
    price: 205000,
    size: 145,
  },
  {
    city: "Tuzla",
    option: "Troiposoban stan",
    type: null,
    price: 114000,
    size: 86,
  },
  {
    city: "Split",
    option: "Dvosoban stan",
    type: "Stanovi",
    price: 215000,
    size: 68,
  },
  {
    city: "Rijeka",
    option: null,
    type: "Kuce",
    price: 240000,
    size: 155,
  },
  {
    city: "Osijek",
    option: "Jednosoban stan",
    type: null,
    price: 84000,
    size: 48,
  },
  {
    city: "Ljubljana",
    option: "Trosoban stan",
    type: "Stanovi",
    price: 315000,
    size: 95,
  },
  {
    city: "Maribor",
    option: null,
    type: "Garaza/parking",
    price: 28000,
    size: 19,
  },
  {
    city: "Celje",
    option: "Garsonjera",
    type: null,
    price: 68000,
    size: 33,
  },
];

let citiesSelector = document.getElementById("citiesSelector");
let typesSelector = document.getElementById("typeSelector");
let numOfRoomsSelector = document.getElementById("numOfRoomsSelector");

for (let city of cities) {
  let option = document.createElement("option");
  option.innerHTML = city;

  let cityFound;
  let typeFound;

  for (let estate of realEstates) {
    if (estate.city === city) {
      cityFound = estate.city;
      typeFound = estate.type;
      break;
    }
  }

  if (cityFound === city && typeFound === null) {
    option.disabled = true;
  }

  console.log(cityFound, typeFound);

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
  currentCity = event.target.value;

  let allEstates = document.getElementsByClassName("realEstate");
  // console.log(realEstates);
  for (let realEstate of allEstates) {
    let estateCity = realEstate.querySelector(".city").textContent;

    realEstate.classList.remove("hidden");

    if (currentCity !== estateCity && currentCity !== "Svi") {
      realEstate.classList.add("hidden");
    }
  }
});

typesSelector.addEventListener("change", function (event) {
  currentType = event.currentTarget.value;
});

numOfRoomsSelector.addEventListener("change", function (event) {
  currentRoom = event.currentTarget.value;
});

for (let estate of realEstates) {
  let createDivEstate = document.createElement("div");
  createDivEstate.classList.add("realEstate");

  let h1City = document.createElement("h1");
  let paragraphOption = document.createElement("p");
  let paragraphPrice = document.createElement("div");
  let paragraphSize = document.createElement("div");

  h1City.innerHTML = estate.city;
  h1City.classList.add("city");

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
}
