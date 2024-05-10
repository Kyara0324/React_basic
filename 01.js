let blockScopeVariable = "Available only in this block";
if (true) {
  var blockedScope = "Visible inside this block";
  console.log(blockedScope);
}
console.log(blockedScope);
console.log(blockScopeVariable);

// var를 쓰지 않는 이유: var를 쓰면 스코프를 벗어나 호출도 되어 잘못된것을 모를 수 있다. 논리적인 흐름에서 벗어남.

for (var i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i);

//이러면 안됨

function testFunction() {
  var test = "any words";
  if (true) {
    var test = "changed value";
  }
  console.log(test);
}

testFunction();

const testValue = "hello world";
console.log(testValue);
