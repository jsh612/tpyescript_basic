const name = "jsh",
  age = 24,
  gender = "male";

// 변수? --> 는 "?"가 붙으면 이 변수는 옵셔널 하다는 것을 가르킨다.
const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(name, age); // Hello jsh, you are 24, you are a undefined

export {}; // ts 에게 변수들이 모듈이 될것임을 그냥 알리는 코드 , 이걸 안쓰면 오류가남 그냥 버그인듯
