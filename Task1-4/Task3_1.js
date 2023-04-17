//const DISKS = [0.5, 1, 2.5, 4.53, 5, 10, 11.33, 15, 15.87, 20, 20.41, 25];
//const MAX_RECORD = 120;

function gym (DISKS,MAX_RECORD){
    const GRIP_WEIGHT = 20;
    let minWeight = Infinity;
let minCombination = null;
    if(MAX_RECORD <20){
       //console.log(`The minimum weight on the grip exceeding the record is 20 kg.`);
       return 20;
    }
    for (let left = 0; left < 13; left++) {
    for (let right = 0; right < 13; right++) {
      
    if (left + right <= 24) {
        
      const leftDisks = DISKS.slice(0, left);
      const rightDisks = DISKS.slice(0, right);
      
        for (let i = 0; i < leftDisks.length; i++) {
        for (let j = 0; j < rightDisks.length; j++) {
            
          const weight = GRIP_WEIGHT + 2 * (left*leftDisks[i] + right*rightDisks[j]);
  
          if (weight > MAX_RECORD && weight < minWeight) {
            minWeight = weight;
        
            minCombination = [left,leftDisks[i],right, rightDisks[j]];
          }
        }
      }
    }
  }
}

if (minCombination) {
  //console.log(`The minimum weight on the grip exceeding the record is ${minWeight.toFixed(2)} kg.`);
  return minWeight.toFixed(2)
}
}

//console.log(gym(DISKS,MAX_RECORD))
module.exports = { gym }