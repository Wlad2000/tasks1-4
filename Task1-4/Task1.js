 
 
 function canTransform(num1, num2) {
    let queue = [num1]; // починаємо з початкового числа
    let visited = [num1]; // відвідані вершини
    let currentNum
    let nextNum1
    let nextNum2
  
    while (queue.length) { 
       currentNum = queue.shift(); // беремо перше число з черги
       
      if (currentNum === num2) {
        return true;
      }

      // додаємо наступні можливі числа до черги
       nextNum1 = currentNum * 2;
       nextNum2 = parseInt(currentNum.toString() + '1');;
      
      if (!visited.includes(nextNum1) && nextNum1 <=num2) {
        queue.push(nextNum1);
        visited.push(nextNum1);
      }
      if (!visited.includes(nextNum2) && nextNum2 <=num2) {
        queue.push(nextNum2);
        visited.push(nextNum2);
      }
    }
    return false;
  }


  module.exports = { canTransform }
  