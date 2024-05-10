// 객체
// (1) Object.keys()
const user = {
  name: "르탄이",
  age: 30,
  isAdmin: true,
};
const keys = Object.keys(user);
console.log(keys);

// (2) Object.values()
const values = Object.values(user);
console.log(values);

// (3) entries
const entries = Object.entries(user);
console.log(entries);

// (4) assign
const userDetails = {
  occupation: "개발자",
};
Object.assign(user, userDetails);
console.log(user);
