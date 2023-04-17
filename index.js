const fs = require("fs");
const { canTransform } = require("./Task1-4/Task1");
const { findDuplicate } = require("./Task1-4/Task2");
const { gym } = require("./Task1-4/Task3_1");
const { canMakeGifts } = require("./Task1-4/Task3_2");
const { countGoodPositions } = require("./Task1-4/Task4");


fs.readFile("./data.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    const data = JSON.parse(jsonString);
    console.log("by Vladislav Harashko ");
    
    const taskOne = canTransform(data.numOne, data.numTwo);
    const taskTwo =  findDuplicate(data.ARR);
    const taskThree = gym(data.DISKS,data.MAX_RECORD);
    const taskThreeTwoPart = canMakeGifts(data.sizes, data.quantities, data.participants)
    const taskFour = countGoodPositions(data.plan);

    const newdata = [
        {"Task1":` answer = ${taskOne}, `,
        "Task2":` answer = ${taskTwo},`,
        "Task3.1":` answer = ${taskThree}kg,`,
        "Task3.2":` answer = ${taskThreeTwoPart}, `,
        "Task4": ` answer = ${taskFour}`
        }       

    ]

    fs.writeFile('./response.json', JSON.stringify(newdata), err => {
    if (err) console.log("Error writing file:", err);
  });
    
    
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});