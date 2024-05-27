// //연습문제
// //문제1.
// const person = {
//   name: "르탄이",
//   age: 25,
//   job: "개발자",
// };

// const { name, age } = person;
// console.log(`안녕하세요 ${name}님, ${age}살 입니다.`);

// //문제2.
// const movie = {
//   title: "Inception",
//   director: "Christopher Nolan",
//   release: {
//     year: 2010,
//     month: "July",
//   },
// };

// const {
//   title,
//   release: { year },
// } = movie;
// console.log(`영화의 제목은 ${title} / (${year}년도)입니다.`);

//문제3.
// const numbers = [10, 20, 30, 40, 50];

// // 구조분해할당에서 중요한것 // 배열 : 위치(index) // 객체 : key

// const [first, , third] = numbers;
// console.log(first);
// console.log(third);

function confirmReservation(user) {
  // 여기에 user 객체를 구조 분해 할당 하세요.
  const { name, roomType, date: firstDate } = user;

  return `${name} 고객님의 ${roomType}룸 입실날짜는 ${firstDate} 입니다.`;
}

const userInfo = {
  name: "James",
  roomType: "Deluxe",
  date: "2023-05-30",
};
const result = confirmReservation(userInfo);
console.log(result);
