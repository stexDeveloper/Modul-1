/**
 * nanapraviti funkciju login
 * Ako se unese username "admin" i lozinka "admin" vratiti true
 * Ako se unese bilo sta drugo, ispisati false
 */

let username = prompt("Unesite username: Admin");
let password = prompt("Unesite password: Admin");
function loginUser(username, password) {
  if (
    username.toLowerCase() === "admin" &&
    password.toLowerCase() === "admin"
  ) {
    return true;
  }
  return false;
}
console.log(loginUser(username, password));
