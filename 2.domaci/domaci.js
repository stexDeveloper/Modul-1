/**
 * shop:
 *  name, products[lista], openingHours (vreme kada se otvarq),
 *  closingHours(vreme kada se zatvara)
 *
 * **/

let shop = {
    name: "Sunce",
    products: ["guarana", "jaja", "hleb", "coca cola"],
    openingHours: "08:00am",
    closingHours: "12:00pm",
}
console.log(shop);

console.log("I am going to the shop named " + shop.name + " ,I will buy " + shop.products[0] +
    ". Gona get there before closing hours which is at " + shop.closingHours + ".");