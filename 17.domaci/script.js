fetch("https://dummyjson.com/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    username: "emilys",
    password: "emilyspass",
    expiresInMins: 30,
  }),
})
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);
  });

async function fetchData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

for (let i = 18; i <= 100; i++) {
  let option = document.createElement("option");
  option.textContent = i;
  document.getElementById("year").appendChild(option);
}

let deleteButton = document.getElementById("delete");

async function register(firstName, lastName, age) {
  let response = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      age: age,
    }),
  })
    .then((response) => response.json())
    .then(function (data) {
      deleteButton.setAttribute("userID", data.id);

      alert("Uspesno ste se logovali sa vasim podacima");
    });
}

document
  .getElementById("registerButton")
  .addEventListener("click", function (e) {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let year = document.getElementById("year").value;

    if (firstName === "" || lastName === "") {
      alert("Niste uneli sve svoje podatke");
      return;
    }

    register(firstName, lastName, year);

    deleteButton.classList.toggle("hidden");
  });

deleteButton.addEventListener("click", function (e) {
  let id = deleteButton.getAttribute("userID");

  fetch(`https://dummyjson.com/users/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
    });
});
