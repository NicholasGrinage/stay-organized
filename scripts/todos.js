"use strict";
const userDrop = document.querySelector("#user-drop");
const usersTableBody = document.querySelector("#usersTableBody");

function loadUserDrop() {
  fetch("http://localhost:8083/api/users")
    .then((response) => response.json())
    .then((users) => {
      for (const user of users) {
        let userOption = document.createElement("option");
        userOption.value = user.id;
        userOption.innerHTML = user.username;
        userDrop.appendChild(userOption);
      }
    });
}

function loadUsersTable() {
  fetch("http://localhost:8083/api/users")
    .then((response) => response.json())
    .then((users) => {
      usersTableBody.innerText = " ";
      for (const user of users) {
        if (userDrop.value == user.id) {
          let row = usersTableBody.insertRow();
          let cell1 = row.insertCell();
          cell1.innerText = user.name;
          let cell2 = row.insertCell();
          cell2.innerText = user.username;
        }
      }
    });
}

function displayTodos() {
  const userId = userDrop.value;
  console.log(userId);
}

window.onload = function () {
  loadUserDrop();
};

userDrop.onchange = loadUsersTable;
