let menuItems = [
    {name: 'Oreshki', price: '$4'},
    {name: "Watermelon", price: "$1"},
    {name: 'Coffee', price: "$5"},
    {name: 'Tea', price: "$4"}
]

let list = document.getElementById("toEdit");

for(let i = 0; i < menuItems.length; i++){
    let listItem = document.createElement("li");
    listItem.innerText = menuItems[i].price + " " + menuItems[i].name;
    list.appendChild(listItem);
}