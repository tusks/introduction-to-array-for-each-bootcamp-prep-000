var evens = [2, 4, 6, 8, 10]
evens.forEach(even => {
  console.log(`${even} is not odd!`)
})

evens.splice(0,0,0)

function doToElementsInArray (array, callback) {
  array.forEach(callback);
}

function changeCompletely (element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}

var animals = ['dog', 'fish', 'cat']

doToElementsInArray(animals, changeCompletely)

console.log(animals)
