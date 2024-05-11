// // 배열
// // push, pop
const fruits1 = ["Apple", "Banana"];
console.log(fruits1);

const { Engine } = require("matter-js");

// // orange를 추가
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

// 반대의 경우로 대조 검증 해봐도 같은 결과로 나왔구요.

// 자료중에
// >>>compareFunc(elem1, elem2)가 있다면, elem1(첫 번째 요소)가 elem2(두 번째 요소)보다 우선순위가 높으면 음수를 반환하고, 낮으면 양수를 반환해주는 함수를 작성하면 된다. 같다면 0을 반환해주면 된다.<<< 라는 내용이 있던데 쓰는 방법이 a-b식의 빼기형식 말고도 다른방법이 있다는걸까요?  true false의 boolean형으로 ===,!==를 이용하는 표현식도 있는걸까요?

// 우선순위가 높으면 음수를 반환하고, 낮으면 양수를 반환해주는 방식에는 여러가지가 있을것같아 질문드립니다. 숫자로 비교할때는 당연히 - 를 쓰면 쉽겠지만, 비교대상이 객체나 문자열인 경우에는 -로 안될것같아 어떤방식으로 표현할지 궁금하네요.
