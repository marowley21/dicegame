var Roll = require('roll'),
  roll = new Roll();

  function rollDice(){
    dice1 = getRandomInt(1,7);
    dice2 = getRandomInt(1,7);
    dice3 = getRandomInt(1,7);
    dice4 = getRandomInt(1,7);
    dice5 = getRandomInt(1,7);
    
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function ScoreDice(){
    turnScore=0
    var myDice=[dice1,dice2,dice3,dice4,dice5];
    var rollCounts={}
    for (i = 1; i < 7; i++) {
      rollCounts[i]=0
  }
  for (i=0; i<5; i++){
      rollCounts[myDice[i]] += 1;
  }
  if(rollCounts[1]>=3){
      rollCounts[1]-=3;
      totalScore+=1000;
      turnScore+=1000;
  }
  if (rollCounts[6] >= 3) {
     rollCounts[6] -= 3;
      totalScore += 600;
      turnScore += 600;
  }
  if (rollCounts[5] >= 3) {
      rollCounts[5] -= 3;
      totalScore += 500;
      turnScore += 500;
  }
  if (rollCounts[4] >= 3) {
      rollCounts[4] -= 3;
      totalScore += 400;
      turnScore += 400;
  }
  if (rollCounts[3] >= 3) {
      rollCounts[3] -= 3;
      totalScore += 300;
      turnScore += 300;
  }
  if (rollCounts[2] >= 3) {
      rollCounts[2] -= 3;
      totalScore += 200;
      turnScore += 200;
  }
  totalScore = totalScore + rollCounts[1] * 100;
  turnScore = turnScore + rollCounts[1] * 100;
  totalScore = totalScore + rollCounts[5] * 50;
  turnScore = turnScore+ rollCounts[5] * 50;

}
document.getElementsByClassName("Roll")[0].addEventListener("click",function(event){
  rollDice();
  ScoreDice();
  document.getElementsByClassName("Total-Score")[0].innerText = 'total ' + totalScore;
  document.getElementsByClassName("Turn-Score")[0].innerText = 'round ' + turnScore;
  document.getElementsByClassName("Dice-Roll")[0].innerText = `[ ${dice1} ] [ ${dice2} ] [ ${dice3} ] [ ${dice4} ] [ ${dice5} ]`;
})
