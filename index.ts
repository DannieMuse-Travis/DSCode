
// interface is  used to customize your datatype
// enum is declare const and  cant be change
// generic can exist and take any form and shape
//  we use generic basic for an array'

let str: string = "i am fine";
let strUpper: string = str.toUpperCase();

function her(a: string): void {
  console.log(arguments);
}

let nameData: null | string | undefined;

type iData = {
name: string,
score: number
}
interface iData {
  name: string;
  score: number;
}

interface iData2 extends iData {
  email: string;
}

let data: iData = {
  name: "Peter",
  score: 89,
};

let data2: iData2 = {
  email: "peter@test.com",
  name: "Okus",
  score: 90,
};

console.log(data!.name);
interface iData {
  name: string;
  email: string;
  phone?: number;
  age: number;
}

interface iData2 extends iData {
  course: string;
  address?: string;
}

interface iData3 extends iData2 {
  height: string | number;
  food: string;
}

let data: iData3 = {
  name: "peter",
  email: "peter@test.com",
  age: 10,
  food: "rice",
  height: "6.5",
  course: "Next",
};

object, array, tuple

let obj: {name: string, score: number} = {name: "Peter", score: 56}

let arr: number[] = [3, 6, 8, 0];
let arr2: string[] = ["3", "6", "8", "0"];
let arr3: { name: string; score: string }[] = [
  { name: "Peter", score: "James" },
  { name: "James", score: "James" },
  { score: "James", name: "James" },
];

let arr4: (number | string | {})[] = [
  "Peter",
  0,
  9,
  "Start",
  { name: "James" },
];

// tuple

let xx: [number, string, number] = [5, "peter", 9];

// const [data, setData] = useState([])
// RGB rgba(211, 230, 0, 0.7)

// Enum

enum myDATA {
  UP = "ADMIN",
  DOWN = "HOD",
  RIGHT = "LECTURER",
  LEFT = "STUDENT",
}

console.log(myDATA.UP);

class Test {
  protected x: number;
  private y: number;
  public z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }
}

class NewTest extends Test {
  getY() {
    return this.x;
  }
}

let testing = new Test(2, 7, 8);

console.log(testing.y);

console.log(testing.getY);

let a: [string, number] = ["franlyn", 8];
enum aa {
  OPEN = 5,
  CLOSE = 50,
}

interface iData {
  age: number;
  name: string;
  state: string;
}

const ab = 45;

let newData: iData = {
  age: aa.CLOSE,
  name: "Osas",
  state: "Delta",
};

interface iUser extends iData {
  price: number;
}

type iDataTypes = {
  name: string;
  price: number;
};

type iDataTypes1 = {
  phone?: number;
};

type iDataTypes3 = iDataTypes &
  iDataTypes1 & {
    age: number;
  };

let data: iDataTypes3 = {
  name: "Peter",
  age: 690,
  price: 455,
};

interface iUser1 {
  name: string;
}

interface iUser2 {
  address: string;
}

interface iUser3 {
  phone: number;
}

interface iUser4 extends iUser1, iUser2, iUser3 {
  age: number;
}
interface iUser5 extends iUser4 {
  isAdmin: boolean;
}

let data2: iUser5 = {
  name: "Peter",
  address: "4 Street",
  age: 889,
  phone: 8877,
  isAdmin: true,
};

interface iStart {
  name: string;
}

interface iStart {
  age: number;
}

let newData2: iStart = {
  name: "Peter",
  age: 67,
};

// Generic
// <>
// let Arr: Array<number> = [8,9,4]

function newFunction<T>(data: Array<T>): Array<T> {
  return data;
}

let ArrFunct = <T>(data: Array<T>): T => {
  return data[1];
};

// console.log(ArrFunct([48, 990]));

let dataNew = [7, 9, 2, 5];

// forEach forIn forOf

for (let i in dataNew) {
  if (dataNew[i] === 5) {
    console.log(dataNew[i]);
  }
}

let itter = {
  name: "Peter",
  score: 3,
  age: 78,
};

for (let i of itter) {
  console.log(i);
}

for (let i of dataNew) {
  console.log(i);
}

interface iClass {
  total: number;
  className: string;
  classTeacherName: string;
}

type iReferClass<Type> = {
  [Props in keyof Type]?: Type[Props];
};

type iReferClass2 = {
  total?: number;
  className?: string;
  classTeacherName?: string;
};

let dataData: iReferClass<iClass> = {
  className: "SS2B",
  classTeacherName: "Mr Okus",
};

// 9
// "Peter"
// newSchool
// A extends B ? C : D
/*
class Student{}
*/

interface school {
  neat: true;
}

interface schoolII {
  neat: true;
}

interface schoolI extends school {
  name: string;
}

type schoolIII<P> = schoolI extends P ? { best: false } : never;

let mySchool: schoolIII<schoolII> = {
  best: false
};

// condition ? statementI : statementII
