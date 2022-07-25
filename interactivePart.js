// Without window.onload, the script may run before the DOM loads
window.onload = function () {
  // Array of to-do items
  let theList = [];

  // Get elements
  const newListItem = document.getElementById("newListItem");
  const addButton = document.getElementById("add");

  // Add on click to add button
  addButton.onclick = function () {
    addElement();
    clearField();
    return false;
  };

  function clearField() {
    newListItem.value = "";
  }

  function addElement() {
    theList.push(newListItem.value);
    //console.log(theList);
    displayArray();
  }

  function displayArray() {
    const listElement = document.getElementById("list");
    //clear page of list item elements
    while (listElement.hasChildNodes()) {
      listElement.removeChild(listElement.firstChild);
    }

    for (let i = 0; i < theList.length; i++) {
      const node = document.createElement("li");
      const textNode = document.createTextNode(theList[i]);
      node.appendChild(textNode);
      listElement.appendChild(node);
    }
  }
};

/**
 * Alternative syntax for anonymous functions
 * addButton.click = () => {
 *  addElement();
 *  return false;
 * }
 */
