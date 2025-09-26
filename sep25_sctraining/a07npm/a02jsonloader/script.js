// JSON-like data stored directly in JavaScript
let x ='{"a":3,"b":4}'; //x is a string but  a json string..


const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];



const list = document.getElementById("userList");

users.forEach(user => {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.textContent = `User ID: ${user.id}, Name: ${user.name}`;
  list.appendChild(li);
});
