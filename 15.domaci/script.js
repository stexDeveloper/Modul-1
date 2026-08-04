/**
 * Ajax, Axios, Fetch, posetReq, XHR...
 *
 * FETCH
 * CORS
 * Cross Origin Resource Sharing
 *   => Izvor (Origin) - odakle pozivamo API
 *
 * -> idi na dummyjson.com/test
 * -> Uzmi odgovor
 * -> Prikazi odgovor u konzoli
 * Asinhrono (Async)
 *
 * Promise -> Garancija da ce te dobiti odgovor
 *            => Kada? Sta ce biti odgovor? Da li dolazi do greske?
 *
 * Pozovi https://dummyjson.com/test
 * -> Promise: Obecavam da cu ti vratiti odgovor nekad
 * -> Kod nastavlja da se izvrsava
 *
 * -> Pozovi DummyJSON API:
 *    -> Obecavam ti da cu ti vratiti odgovor nekad
 *
 *    -> Kod nastavlja da se izvrsava
 */

//API vraca 20 podataka, soortirani po ceni od najvise ka najnizoj

fetch("https://dummyjson.com/products")
  .then(function (response) {
    if (response.ok) {
      console.log("Uspesno smo pozvali API");
    }
    return response.json(); // Vraca se Promise
  })
  .then(function (data) {
    console.log(data.products);
  });

let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");

let userInput;

searchInput.addEventListener("input", function (event) {
  userInput = event.target.value;
});

searchButton.addEventListener("click", function () {
  fetch(`https://dummyjson.com/products/search?q=${userInput}`)
    .then(function (response) {
      if (response.ok) {
        console.log("Uspesno smo pozvali API");
      }
      return response.json(); // Vraca se Promise
    })
    .then(function (data) {
      let userInputProduct = document.getElementById("userInputProduct");
      for (let product of data.products) {
        let p = document.createElement("p");
        p.innerHTML = product.title;
        userInputProduct.appendChild(p);
      }
    });
});
