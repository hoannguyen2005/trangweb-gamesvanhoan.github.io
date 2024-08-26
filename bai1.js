

let arr = [];
let n = prompt("Nhập vào số phần tử không vượt quá trong mảng : ");

for (let i = 0; i < n; i++) {
  arr.push(parseInt(prompt("Nhập vào phần tử" + (i + 1) + ": ")));
}

let sum = 0;
console.log("Các số có bội chung của 3 và 5 Là: ");
arr.forEach(num => {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log(num);
    sum += num;
  }
});

console.log("Tổng các số là: " + sum);