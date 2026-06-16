/**
 * Domaci:
 * Napraviti dve varijable: name, passsword
 * name vrednost je "admin"
 * password vrednost je "tajnasifra"
 *
 * Da se napravi sledece poredjenje
 * ->Ako je name "admin" i akom je password "tajnasifra"
 *   ->Da se ispise "Dobrodosli nazad"
 * ->Ako je name "stefan" i ako je sifra "tajnasifra"
 *   ->Da se ispise "Dobrodosao Stefane"
 * ->Ako nije nista od ponudjenih
 *   ->Ispisati "Pogresna lozinka ili ime"
 */

let name = "admin"
let password = "tajnasifra"

if(name == "admin" && password == "tajnasifra")
{
    console.log("Dobrodosli nazad");
}
else if(name == "Stefan" && password == "tajnasifra")
{
    console.log("Dobrodosao Stefane");
}
else
{
    console.log("Pogresna lozinka ili ime");
}