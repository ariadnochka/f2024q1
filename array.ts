const fruits =['apple', 'banana', 'grapes', 'orange', 'kiwi']
const vegetables =['tomato', 'potatoes', 'cucumber', 'carrots', 'beet']
fruits.push('ada')
const plants = fruits.concat(vegetables)
plants.sort()
console.log(plants)