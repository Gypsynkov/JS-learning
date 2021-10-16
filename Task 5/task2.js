const array = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

const maxOccurences = (array) =>
  Array.from(
    array.reduce( (map, value) => map.set(value, map.has(value) ? map.get(value) + 1 : 1),
        new Map()
      )
      .entries()
  )
    .reduce((max, entry) => (entry[1] > max[1] ? entry : max))
    .reduce((item, count) => ( item ));

console.log(maxOccurences(array));
