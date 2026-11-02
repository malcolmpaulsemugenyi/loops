const colors = ["black", "pink", "green", "blue", "yellow", "cyan"]
for(i = 0; i < colors.length; i ++){
    if(colors[i] == "green"){
        console.log("green is my favorite color")
    }
    else{
        console.log(colors[i])
    }
}
const ages = [15, 18, 16, 21, 28, 26]
for(let i = 0; i < ages.length; i ++){
    if(ages[i] < 18){
        console.log("this is a child")
    }
    else{
        console.log("this is an adult")
    }
}
const size = [54, 12, 3, 46]
let tallestPerson = size[0]
for(let i = 0; i < size.length; i ++){
    if(size[i]>tallestPerson){
        tallestPerson = size[i]
    }
}
console.log(tallestPerson)
const cars = [3, 5, 6, 0, 2, 10, 12, 9, 6]
let house = cars[0]
for(let i = 0; i < cars.length; i ++){
    if(cars[i]>house){
        house = cars[i]
    }
}
console.log(house)
listnumberofcars=cars[0]
for(let i = 0; i < cars.length; i ++){
    if(cars[i]<listnumberofcars){
        listnumberofcars = cars[i]
    }
}
console.log(listnumberofcars)
const salary = [100, 200, 300, 4000000]
for(let i = 0; i < salary.length; i ++){
    if(salary[i]<10000){
        console.log("you should not pay taxes")    
    }
    else{
        console.log("you should pay taxes")
    }
}
console.log(salary)