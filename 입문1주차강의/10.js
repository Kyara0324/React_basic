function add() {}

const minus = function () {};

const add = function (a, b) {
  return a + b;
};

const result = add(3, 5);

const add = (a, b) => {
  return a + b;
};

console.log(add(1, 3));

// 조건 연산자 = 삼항 연산자

const score = 85;
const grade = score >= 80 ? "A" : "B";

if (score >= 80) {
  grade = "A";
} else {
  grade = "B";
}

console.log(grade);

// 단축평가
// -논리 연산자를 활용(||, &&, ?., ??)

// (1) 논리합연산자(||)
// truthy, falsy
// falsy : false, 0, "", null, undefined, NaN
const getUserName = (user) => {
  return user.name || "신원미상";
};

const person = {
  age: 30,
  name: "르순이",
};
console.log(getUserName(person));

// (2) 논리곱(&&) 연산자

const loggerIn = true;
const userName = "르탄이";

loggerIn && console.log(`환영합니다 ${userName}님!`);

// optional chaining
const user = {
  profile2: {
    name: "르탄이",
    details: {
      age: 30,
      location: "서울시 강남구",
    },
  },
  printHello: () => console.log("Hello"),
};

const result1 = user.printHello1?.();
console.log(result1);

// Null 병합 연산자 (??)
let userLocation = null;
console.log(userLocation ?? "없는위치");

const displayPreferences = (preference) => {
  const textLength = preference.textLength || 50;
  console.log("1 => ", textLength);

  const itemsPerPage = preference.itemsPerPage ?? 10;
  console.log("2 => ", itemsPerPage);
};

const userPreference = {
  textLength: 0,
  itemsPerPage: null,
};

displayPreferences(userPreference);
