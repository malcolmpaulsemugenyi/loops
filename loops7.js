const people = [{name: "malcolm", age: 16, height: 9},{name: "irene", age: 55, height: 6},{name: "joan", age: 46, height: 8}]
let youngestpeople = people[0]
const vehicles = [{type: "Cargo Train", topspeed: 120},{type: "Sport Car", topspeed: 320},{type: "Passneger Bus", topspeed: 100},{type: "Electric Bicycle", topspeed: 45}]
let slowestvehicle = vehicles[0]
for(i = 0; i < vehicles.length; i ++){
    if(vehicles[i].topspeed<slowestvehicle.topspeed)
        slowestvehicle=vehicles[i]
}
console.log(slowestvehicle)
let fastestvehicle = vehicles[0]
for(i = 0; i < vehicles.length; i ++){
    if(vehicles[i].topspeed>fastestvehicle.topspeed)
        fastestvehicle=vehicles[i]
}
console.log(fastestvehicle)