/*const plan = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ];
*/
  
   function countGoodPositions(plan) {
    const n = plan.length; // кількість рядків
    const m = plan[0].length; // кількість стовпців
    let count = 0; // лічильник "хороших позицій"
    
    
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        // перевіряємо, чи немає в цій клітинці
        if (plan[i][j] === 0) {
          
          let hasActor = false;
          // вліво
          for (let k = j - 1; k >= 0; k--) {
            if (plan[i][k] === 1) {
              hasActor = true;
              break;
            }
          }
          // вверх
          if (!hasActor) {
            for (let k = i - 1; k >= 0; k--) {
              if (plan[k][j] === 1) {
                hasActor = true;
                break;
              }
            }
          }
          // вправо
          if (!hasActor) {
            for (let k = j + 1; k < m; k++) {
              if (plan[i][k] === 1) {
                hasActor = true;
                break;
              }
            }
          }
          // вниз
          if (!hasActor) {
            for (let k = i + 1; k < n; k++) {
              if (plan[k][j] === 1) {
                hasActor = true;
                break;
              }
            }
          }
  
          // збільшуємо лічильник "хороших позицій"
          if (hasActor) {
            count++;
          }
        }
      }
    }
    
    return count;
  }

  module.exports = { countGoodPositions }