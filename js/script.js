"use strict";
//1
let listNode = document.getElementById("albums");

function addItem(item) {
  let listItemNode = document.createElement('li');
  let itemButtonNode = document.createElement('button');
  itemButtonNode.classList.add("remove-button");
  listItemNode.classList.add("album-title");
  listItemNode.innerHTML = item.title;
  itemButtonNode.innerHTML = "delete";
  listItemNode.append(itemButtonNode);
  listNode.append(listItemNode);
  listNode.addEventListener("click", (event) => {
    let isRemoveButton = event.target.className === "remove-button";
    if (isRemoveButton) {
      let removeButton = event.target;
      let albumTitleBlock = removeButton.closest(".album-title");
      albumTitleBlock.remove();
    }
  });
}
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((result) => result.forEach((item) => addItem(item)))
  .catch((error) => console.error(error));