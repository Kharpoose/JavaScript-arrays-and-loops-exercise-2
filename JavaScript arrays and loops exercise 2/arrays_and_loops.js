const array1 = [1, 2, 3];
console.log(array1);

const array2 = array1;

array2.push(5);
console.log(array1);

const array3 = [1, 2, 3];
console.log(array3);

const array4 = array3.slice();

array4.push(5);
console.log(array4);
console.log(array3);

const [firstValue, secondValue] = [1, 2, 3];
console.log(firstValue);
console.log(secondValue);

const [mainValue] = ["ilk", 2, 3];
console.log(mainValue);

for (let i = 0; i <= 10; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
  if (i === 8) {
    console.log("ends here");
    break;
  }
}

let i = 1;

while (i <= 10) {
  if (i % 3 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

function doubleArray(nums) {
  const numsDoubled = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === 0) {
      return numsDoubled;
      //break; also works 
    }
    numsDoubled.push(num * 2);
  }
  return numsDoubled;
}

console.log(doubleArray([1, 9, 1, 0, 9]));
console.log(doubleArray([2, 2, 5]));
