class Human {
  public name: string;
  private age: number; // private으로 설정되어 외부에서 age를 불러올 수 없다
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const jsh = new Human("jsh", 20, "female");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(jsh));
