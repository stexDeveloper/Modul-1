let products = document.getElementById("products");

let ads = [
    {
        title: "Skoda Octavia 2014",
        price: 9950,
        image: "https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/skoda-octavia.jpg?itok=-EMoNRh9",
    },
    {
        title: "Audi A4",
        price: 8000,
        image: "https://platform.cstatic-images.com/in/v2/stock_photos/c4359896-c20e-46da-87a2-a7b2734561b3/c0535e58-31b9-488d-b5b7-55818402e3e6.png",
    },
    {
        title: "Alfa Romeo Giulia",
        price: 16000,
        image: "https://en.wheelz.me/wp-content/uploads/2023/02/Alfa_Romeo-Giulia-2023.webp",
    }
];

for (let i = 0; i < ads.length; i++) {
    let createImage = document.createElement("img");
    let createTitle = document.createElement("p");
    let createPrice = document.createElement("p");
    createTitle.innerHTML = ads[i].title;
    createPrice.innerHTML = ads[i].price;
    createImage.src = ads[i].image;
    products.appendChild(createTitle);
    products.appendChild(createPrice);
    products.appendChild(createImage);
}

