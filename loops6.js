let myscore = [{name: "malcolm", subject: "math", score: 100},{name: "irene", subject: "physics", score: 80},{name: "joan", subject: "sst", score: 90}]
for(i = 0; i < myscore.length; i ++){
    console.log(myscore[i])
}
let highestscore = myscore[0]
for(i = 0; i < myscore.length; i ++){
    if(myscore[i].score>highestscore.score){
        highestscore=myscore[i]
    }
}
console.log(highestscore)
let lowestscore = myscore[0]
for(i = 0; i < myscore.length; i ++){
    if(myscore[i].score<lowestscore.score){
        lowestscore=myscore[i]
    }
}
console.log(lowestscore)