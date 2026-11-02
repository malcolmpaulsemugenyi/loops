const fruits = [{name: "sweetpotatoes", color: "pink", quantity: 5},{name: "pear", color: "yellow", quantity: 3},{name: "pumpkin", color: "green", quantity: 6}]
for(i = 0; i < fruits.length; i ++){
    console.log(fruits[i].quantity)
}
let biggestquantity = fruits[0]
for(i = 0; i < fruits.length; i ++){
    if(fruits[i].quantity>biggestquantity.quantity){
        biggestquantity=fruits[i]
    }
}
console.log(biggestquantity)
let smallestquantity = fruits[0]
for(i = 0; i < fruits.length; i ++){
    if(fruits[i].quantity<smallestquantity.quantity){
        smallestquantity=fruits[i]
    }
}
console.log(smallestquantity)
const subjects = [{name: "physics", score: 50},{name: "math", score: 80},{name: "english", score: 50}]
let smallestscore = subjects[i]
for(i = 0; i < subjects.length; i ++){
    if(subjects[i].score<smallestscore){
        smallestscore=subjects[i]
    }
}
console.log(smallestscore)