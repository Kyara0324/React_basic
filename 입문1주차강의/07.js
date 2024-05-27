// Destructuring
// De: not
// structuring: 구조
const item = {
  name: "커피",
  price: 4000,
};

// const name = item.name;
// const price = item.price;
const { name, price } = item;

console.log("name => ", name);
console.log("price => ", price);

function greet({ name, age }) {
  console.log(`안녕하세요. 제 이름은 ${name}입니다, 나이는 ${age}살 이에요.`);
}

const person = {
  name: "르순이",
  age: 28,
};
greet(person);

// 배열의 Destructuring
const colors = ["red", "green", "blue"];
const [, , thirdColor] = colors;

console.log(thirdColor);
