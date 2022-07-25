// Without window.onload, the script may run before the DOM loads
window.onload = function () {
  // Array of to-do items
  let theList = [];

  // Get elements
  const newListItem = document.getElementById("newItem");
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
    console.log(theList);
    printArray();
  }

  function printArray() {
    for (let i = 0; i < theList.length; i++) {
      const showArray = document
        .getElementById("arrPrint")
        .appendChild(
          document
            .createElement("li")
            .appendChild(document.createTextNode(theList[i]))
        );
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
