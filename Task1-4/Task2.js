function findDuplicate(arr) {
    let slow = arr[0];
    let fast = arr[0];
  
    while (true) {
      slow = arr[slow];
      fast = arr[arr[fast]];
      if (slow === fast) {
        break;
      }
    }
  
    let ptr1 = arr[0];
    let ptr2 = slow;
  
    while (ptr1 !== ptr2) {
      ptr1 = arr[ptr1];
      ptr2 = arr[ptr2];
    }
  
    return ptr1 == undefined ? 'no duplicate' : ptr1;
  }

  module.exports = { findDuplicate }