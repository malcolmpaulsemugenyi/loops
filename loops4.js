const people = [{name: "malcolm", age: 40, salary: 4000},{name: "irene", age: 56, salary: 6000},{name: "deborah", age: 46, salary: 3000}]
let biggestanna = people[0]
for(i = 0; i < people.length; i ++){
    if(people[i].salary>biggestanna.salary){
        biggestanna=people[i]
    }
}
console.log(biggestanna)
let youngestperson = people[0]
for(i = 0; i < people.length; i ++){
    if(people[i].age<youngestperson.age){
        youngestperson=people[i]
    }
}
console.log(youngestperson)
let oldestperson = people[0]
for(i = 0; i < people.length; i ++){
    if(people[i].age>oldestperson.age){
        oldestperson=people[i]
    }
}
console.log(oldestperson)
const cars = [{name: "subaru", year: 1922},{name: "toyota", year: 1921},{name: "ford", year: 1899}]
let oldestcar = cars[0]
for(i = 0; i < people.length; i ++){
    if(people[i].year>oldestcar.year){
        oldestcar=people[i]
    }
}
console.log(oldestcar)
let newestcar = cars[0]
for(i = 0; i < people.length; i ++){
    if(people[i].year<newestcar.year){
        newestcar=people[i]
    }
}
console.log(newestcar)