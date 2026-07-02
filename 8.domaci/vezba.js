let cars = [
    { name: "BMW M3", price: 65000, modelYear: 2026, image: "https://wallpapercat.com/w/full/6/c/8/1774416-3840x2160-desktop-4k-bmw-m3-background-image.jpg" },
    { name: "Audi RS6", price: 120000, modelYear: 2022, image: "https://upload.wikimedia.org/wikipedia/commons/2/20/2021_Audi_RS6_Avant_in_Nardo_Gray%2C_front_right.jpg" },
    { name: "Mercedes C63 AMG", price: 95000, modelYear: 2010, image: "https://issimi-vehicles-cdn.b-cdn.net/publicamlvehiclemanagement/VehicleDetails/612/timestamped-1721779368752-2012%20Mercedes-Benz%20C63%20AMG%20Black%20Series_000002.jpg?width=3840&quality=75" },
    { name: "Toyota Supra", price: 55000, modelYear: 2021, image: "https://www.thedrive.com/wp-content/uploads/2024/08/2024-Toyota-Supra-stick-shift.jpg?quality=85&w=1200" },
    { name: "Honda Civic Type R", price: 47000, modelYear: 2018, image: "https://www.automoli.com/common/vehicles/_assets/img/gallery/f68/honda-civic-type-r-fk8-facelift-2020.jpg" },
    { name: "Ford Mustang GT", price: 52000, modelYear: 2026, image: "https://hips.hearstapps.com/hmg-prod/images/2019-ford-mustang-shelby-gt-s-lead2-1566224220.jpg?crop=0.808xw:0.881xh;0.0743xw,0.00847xh&resize=640:*" },
    { name: "Porsche 911", price: 140000, modelYear: 2026, image: "https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-carrera-t-103-69371b6c2a013.jpg" },
    { name: "Nissan GT-R", price: 115000, modelYear: 2017, image: "https://www.automanijak.com/resources/images/variant/1296/gtr_1.jpg" },
    { name: "Alfa Romeo Giulia QV", price: 92000, modelYear: 2026, image: "https://media.drive.com.au/obj/tx_q:70,rs:auto:1920:1080:1/driveau/upload/cms/uploads/b34bf368-fd03-566b-a39c-7ae1ba350000" }
];

let mainDiv = document.getElementById("main");

/**
 * Napraviti petlju koja ce na stranici ispisati sve automobile
 */
// <div class = "product">
//     <img>
//         <p>Audi A4 <span class="productPrice">2400</span></p>
// </div>

for (let car of cars) {

    let image = document.createElement("img");
    let div = document.createElement("div");
    let div2 = document.createElement("div");


    let paragraph = document.createElement("p");

    let span = document.createElement("span");

    let paragraph2 = document.createElement("p");


    image.src = `${car.image}`;
    image.alt = "Image of a Car";


    div.classList.add("product");
    div2.classList.add("productParagraph");




    let text = document.createTextNode(`${car.name} `);


    span.classList.add("productPrice");

    let text2 = document.createTextNode(`${car.price}€`);

    let text3 = document.createTextNode(`${car.modelYear}`);





    span.appendChild(text2);


    paragraph.appendChild(text);
    paragraph.appendChild(span);
    paragraph2.appendChild(text3);


    div.appendChild(image);

    div2.appendChild(paragraph);
    div2.appendChild(paragraph2);


    div.appendChild(div2);

    if(car.modelYear === 2026){
        let div3 = document.createElement("div");
        let paragraph3 = document.createElement("p");
        let text4 = document.createTextNode("NOVO");
        div3.classList.add("latestYear");
        paragraph3.appendChild(text4);
        div3.appendChild(paragraph3);
        div.appendChild(div3);
    }

    mainDiv.appendChild(div);
}



// let div = document.createElement('div');
// div.classList.add('test');
// let text = document.createTextNode('Test');
// div.appendChild(text);
// document.body.appendChild(div)
//
// let product = document.createElement("p");
// product.classList.add('product');
// let text2 = document.createTextNode('Test');
//
// product.appendChild(text2);
// div.appendChild(product);
