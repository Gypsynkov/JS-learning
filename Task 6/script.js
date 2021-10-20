const colors = ["red", "blue", "green", "yellow"];
let text = document.querySelector("p").outerHTML;
let words = text.split(" ");
function addSpan(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let n = 0; n < colors.length; n++) {
      let ind = arr[i].toLowerCase().indexOf(colors[n].toLowerCase());
      if (ind !== -1) {
        arr[i] =
          arr[i].slice(0, ind) +
          `<span style='color: ${colors[n]}'>` +
          arr[i].slice(ind, ind + colors[n].length) +
          "</span>" +
          arr[i].slice(ind + colors[n].length);
      }
    }
  }
  return arr;
}
document.body.innerHTML = addSpan(words).join(" ");
