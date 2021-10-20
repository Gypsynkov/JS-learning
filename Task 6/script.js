const colors = ["red", "blue", "green", "yellow"];
let text = [];
let words = [];
let result = [];
document.querySelectorAll("p").forEach((item)=>text.push(item.outerHTML));

text.forEach((item)=>words.push(item.split(' ')))

function addSpan(arr) {
  arr.forEach((element)=>{
    for (let i = 0; i < element.length; i++) {
      for (let n = 0; n < colors.length; n++) {
        let ind = element[i].toLowerCase().indexOf(colors[n].toLowerCase());
        if (ind !== -1) {
         element[i] =
            element[i].slice(0, ind) +
            `<span style='color: ${colors[n]}'>` +
            element[i].slice(ind, ind + colors[n].length) +
            "</span>" +
            element[i].slice(ind + colors[n].length);
        }
      }
    }
  })
   
  return arr;
}
addSpan(words).forEach((item)=>result.push(item.join(' ')));
document.body.innerHTML = result.join('')

