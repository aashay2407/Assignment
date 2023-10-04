// Function to allow drop in the right-inner-div
function allowDrop(event) {
  event.preventDefault();
}

// Function to handle the drop event
function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data);
  const rightInnerDiv = event.target;

  // Check if the drop target is the right-inner-div
  if (rightInnerDiv.id === "right-inner-div") {
    // Calculate the drop position within the right-inner-div
    const rect = rightInnerDiv.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - 32;
    const offsetY = event.clientY - rect.top - 32;

    // Set the position of the dragged element within the right-inner-div
    draggedElement.style.position = "absolute";
    draggedElement.style.left = offsetX + "px";
    draggedElement.style.top = offsetY + "px";

    rightInnerDiv.appendChild(draggedElement);
  }
}

// Event listener to handle drag start
document
  .getElementById("draggable")
  .addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
  });

// Event listener to handle drag end
document
  .getElementById("draggable")
  .addEventListener("dragend", function (event) {
    var rightInnerDiv = document.getElementById("right-inner-div");
    var button = document.getElementById("draggable");

    // Check if the button was not dropped in the right-inner-div, then append it back to left-div
    if (button.parentElement !== rightInnerDiv) {
      leftDiv.appendChild(button);
    }
  });
