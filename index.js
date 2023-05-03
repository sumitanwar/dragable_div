const dragDiv = document.querySelector(".dragable_div");
function dragWithMouse({ movementX, movementY }) {
  let getStyles = window.getComputedStyle(dragDiv);
  let left = parseInt(getStyles.left);
  let top = parseInt(getStyles.top);
  //   console.log(left, top);
  //   console.log(movementX, movementY);
  dragDiv.style.left = `${movementX + left}px`;
  dragDiv.style.top = `${movementY + top}px`;
}
dragDiv.addEventListener("mousedown", () => {
  dragDiv.addEventListener("mousemove", dragWithMouse);
});
document.addEventListener("mouseup", () => {
  dragDiv.removeEventListener("mousemove", dragWithMouse);
});
