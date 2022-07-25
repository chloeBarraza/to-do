// Without window.onload, the script may run before the DOM loads
window.onload = function () {
  // Array of to-do items
  let theList = [];

  // Get elements
  const newListItem = document.getElementById("newItem");
  const addButton = document.getElementById("add");
  const showArray = document
    .getElementById("arrPrint")
    .appendChild(
      document
        .createElement("li")
        .appendChild(document.createTextNode(theList[i]))
    );

  // Add on click to add button
  addButton.onclick = function () {
    addElement();
    return false;
  };

  /**
   * Alternative syntax for anonymous functions
   * addButton.click = () => {
   *  addElement();
   *  return false;
   * }
   */

  function addElement() {
    theList.push(newListItem.value);
    console.log(theList);
    printArray();
  }

  function printArray() {
    for (let i = 0; i < theList.length; i++) {
      theList[i];
    }
  }
};
