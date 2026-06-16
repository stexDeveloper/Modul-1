/**
 * Napraviti varijablu "dayOfTheWeek" let dayOfTheWeek = "ponedeljak",uraditi proveru da li je dan
 * -> subota ili nedelja: ako jeste, ispisati "Weekend!"
 * -> ako je petak ispisati "Weekend is coming!"
 * -> Ako je bilo koji drugi dan ispisati: "Work, work..."
 */

let dayOfTheWeek = "Sunday";

switch(dayOfTheWeek){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("Work, work...");
        break;
    case "Friday":
        console.log("Weekend is coming!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
}