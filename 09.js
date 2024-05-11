// Spread Operators
const originalUser = {
  name: "르탄이",
  age: 28,
};

// 어디에 복사!
// const updatedUser = originalUser; <= x
const updatedUser = { ...originalUser };
updatedUser.name = "르순이";

console.log("원본=> ", originalUser);
console.log("복사본=> ", updatedUser);

const first = [1, 2, 3];
const second = [4, 5, 6];

///////////////////////////////////////////////
const combinedArray = [...first, ...second];
console.log(combinedArray);

const obj1 = { name: "르탄이", age: 25 };
const obj2 = { name: "르순이", email: "rsoony@sparta.com" };

const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject);

mergedObject.name = "원장님";
console.log(obj1);
console.log(obj2);

// rest operator는 spread operator와 비슷하다!

// (1) 함수의 매개변수
function sum(...numbers) {
  console.log("HERE! => ", numbers);
  return numbers.reduce((acc, cur) => acc + cur);
}

const result = sum(1, 2, 3, 4, 5);
console.log(result);

// (2) 객체 분해 할당 시, 여러 값을 그룹핑
const person = {
  name: "John",
  age: 30,
  country: "USA",
  occupation: "Developer",
};

// const { occupation, name, age, country } = person;

const { occupation, ...rest } = person;
console.log("rest =>", rest);
