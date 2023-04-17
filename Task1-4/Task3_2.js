
//const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];
//const quantities = [2, 1, 1, 1, 8, 5];

/*const participants = [
  { name: "John", size: "M" },
  { name: "Kate", size: "L" },
  { name: "Alex", size: "XL" },
  { name: "Mike", size: "S-M" },
  { name: "Sarah", size: "L-XL" }
];
*/

// функція, яка перевіряє, чи можливо зробити подарунок усім учасникам
function canMakeGifts(sizes, quantities, participants) {
  // перевірка, чи є достатня кількість футболок для кожного розміру
  for (let i = 0; i < sizes.length; i++) {
    if (quantities[i] < participants.filter(p => p.size === sizes[i]).length) {
      return false;
    }
  
     if ( quantities[i] < participants.filter(p => p.size === sizes[i+2]).length) {
      return false;
    }
  }

  // комбінації двох сусідніх розмірів
  for (let i = 0; i < sizes.length - 1; i++) {
    const combination = sizes[i] + "-" + sizes[i + 1];
  }

  // якщо достатня кількість футболок для кожного учасника, повертаємо true
  return true;
}


/*if (canMakeGifts(sizes, quantities, participants)) {
  console.log("can gift all athletes");
  // розподіл футболок учасникам
  participants.forEach(p => {
    if (p.size.length === 1) {
      // якщо вказаний один розмір, дати футболку цього розміру
      console.log(`${p.name}: t-shirt size ${p.size}`);
    } else {
      // якщо вказано два розміри, дати будь-яку з двох можливих сусідніх розмірів
      let index = sizes.indexOf(p.size.split("-")[0]);
    
      console.log(`${p.name}:  t-shirt size ${sizes[index]} or ${sizes[index+1]}`);
    }
  });
} else {
    console.log("can not gift all athletes");
}*/

module.exports = { canMakeGifts }