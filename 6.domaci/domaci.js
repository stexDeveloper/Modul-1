/**
 * Da li je ime koje je korisnik uneso u array names
 * Toma -> da li se to ime nalazi u array names?
 * Ako se nalazi ispsati preko alerta "Dobrodosao administratore"
 * Ako se ne nalazi onda ispisati "Nemate pristup sajtu"
 */

let names = ["admin", "admisnitrator", "toma", "stefan", "mika", "jake"];

let namePrompt = prompt("Unesite vase ime: ").toLowerCase();

for(let i = 0; i < names.length; i++){
    if(names[i] === namePrompt){
        alert("Dobrodosao administratore");
        break;
    }else if(i === names.length-1){
        alert("Nemate pristup sajtu");
    }
}
