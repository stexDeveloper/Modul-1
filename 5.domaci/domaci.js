let carBrands = [
    "Audi",
    "BMW",
    "Mercedes-Benz",
    "Volkswagen",
    "Opel",
    "Ford",
    "Toyota",
    "Honda",
    "Nissan",
    "Mazda",
    "Hyundai",
    "Kia",
    "Peugeot",
    "Renault",
    "Citroen",
    "Fiat",
    "Alfa Romeo",
    "Ferrari",
    "Lamborghini",
    "Maserati",
    "Porsche",
    "Volvo",
    "Saab",
    "Skoda",
    "Seat",
    "Dacia",
    "Chevrolet",
    "Jeep",
    "Dodge",
    "Chrysler",
    "Cadillac",
    "Buick",
    "GMC",
    "Lincoln",
    "Tesla",
    "Subaru",
    "Suzuki",
    "Mitsubishi",
    "Lexus",
    "Infiniti",
    "Acura",
    "Jaguar",
    "Land Rover",
    "Mini",
    "Bentley",
    "Rolls-Royce",
    "Aston Martin",
    "Bugatti",
    "McLaren",
    "Genesis"
];

for(let i = 0; i<carBrands.length; i++){
    //ako ime automobila pocinje sa slovom "a", ne ispisati ga

    let car = carBrands[i].toLowerCase();

    if(car.startsWith("a")){
        i++;
    }

    console.log(carBrands[i]);
}

