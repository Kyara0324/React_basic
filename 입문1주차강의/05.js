// 배열
// push, pop
const fruits1 = ["Apple", "Banana"];
console.log(fruits1);

const { Engine } = require("matter-js");

// orange를 추가
fruits1.push("Orange");
console.log(fruits1);

const lastFruit = fruits1.pop();
console.log("----");
console.log(lastFruit);
console.log(fruits1);

// map: 원본 배열에서 각 요소를 가공한 새로운 배열을 리턴하는 함수
// 1) 배열 내의 모든 요소 각각에 대해
// 2) 주어진 함수를 호출한 결과를 모아
// 3) 새로운 배열을 반환
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(function (num) {
  return num * num;
});

console.log(squared);

// filter

const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers);

const 동영상리스트 = [
  {
    아이디: 1,
    제목: "동영상01",
    썸네일이미지: "image01.jpg",
  },
  { 아이디: 2, 제목: "동영상02", 썸네일이미지: "image02.jpg" },
  { 아이디: 3, 제목: "동영상03", 썸네일이미지: "image03.jpg" },
  { 아이디: 4, 제목: "동영상02", 썸네일이미지: "image04.jpg" },
];

const 필터링된동영상리스트 = 동영상리스트.filter(function (영상) {
  return 영상.제목 === "동영상02";
});

[
  { 아이디: 2, 제목: "동영상02", 썸네일이미지: "image02.jpg" },
  { 아이디: 4, 제목: "동영상02", 썸네일이미지: "image04.jpg" },
];

console.log(필터링된동영상리스트);
console.log("============");

// reduce -누적기
const numbers1 = [1, 2, 3, 4, 5];
const result = numbers1.reduce(function (누적된값, 일반값) {
  console.log("------");
  console.log(누적된값);
  console.log(일반값);

  return 누적된값 + 일반값;
});

console.log("result =>", result);

//sort -정렬을 위한 함수
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
const sortedFruits = fruits.sort();
console.log(sortedFruits);

const numbers2 = [40, 5, 100, 1, 5, 25];

numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers2);
console.log(numbers2[0]);

//==================================================
// const numbers = [40, 5, 100, 1, 5, 25];

// numbers.sort(function (a, b) {
//   return a - b;
// });
// 저는 return의 결과값이 양수면 true여서 sort의 재정렬 알고리즘 로직이 작동되어 재정렬되고, 음수면 false여서 작동을 안하는 걸로 가정을 했는데요,
// a가 40, b가 5일때 a-b는 양수가 되어 재정렬돼서 40과 5의 위치가 바뀌고, a에 100이 들어가고 b에 1이 들어가면 양수가 되어 재정렬되고, a에 5가 들어가고 b에 25가 들어가면 음수가 되어 재정렬이 안되어서 제자리에 있고... 이런식으로 모든 index가 재정렬 될때까지 반복하여 결국 [1, 5, 5, 25, 40, 100] 이런식의 오름차순으로 되는걸로 이해했습니다.

