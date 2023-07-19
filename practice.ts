// let str:string="this is me"
// let striUp:string=str.toLowerCase()
// console.log(striUp);

// function y(travis?:string):IArguments {
//    return arguments

// }
// console.log(y());

// let dat={
//    name:"tobi",
//    score:50,
// }
// console.log(data.name);


// interface Idate{
//    name:string,
//    age:number,
//    phone:number,
//    score:number,
// }

// interface Idate2 extends Idate{
//    course?:string,
//    addresss:string,
// }

// interface Idate3 extends Idate2{
//    school:string,
//    goal?:string,

// }

// // everything listed must be in the datatype 

// let Data : Idate, Idate2 ={
// name:"Tiana",
// age:18,
// phone:9145,
// score:65,
// course:"blochchain",
// address:"jrgcjkrhcbkffhioh g",
// school:"unilag",
// goal:"uguigdiughbb"

// }

// // public: means we can accept and get file from anywhere
// // private:
// // Readonly:
// // protect:

// class Person{
//    name:string;
//    age:number;

//    constructor(name:string,age:number){
//       this.name=name
//       this.age=age
//    }
// }


// // class Student {

// 	// private _name: string = "Aman Rathod";
// 	// private _semester: number;
// 	// private _course: string;

// 	// Getter method to return name
// 	// of Student class
// 	// public get name() {
// 		// return this._name;
// 	// }

// 	// Setter method to set the semester number
// 	// public set semester(thesem: number) {
// 		// this._semester = thesem;
// 	// }

// 	// Setter method
// 	// public set course(thecourse: string) {
		// this._course = thecourse;
	// }
// }

// Access any property of the Student class
// let student = new Student();

// Setter call
// student.semester = 5;
// student.course = "Web Development";

// class person{
//    name:string
//    age:number
//    score:Number

//    constructor(name:string,age:number,score:number){
//       this.name=name;
//       this.age=age;
//       this.score=score;
//    }
//    getperson():IArguments{
//       return arguments
//    }
// }

// let  NewPerson = new person("travis",50,60)


// joel 5:25






// class Adele{
//    name:string
//    age:number
//    constructor(name:string,age:number){
//       this.name=name
//       this.age=age
//    }

//    getName(){
//       return this.name
//    }

//    getAge(){
//       return this.age
//    }
// }

// class newAdele extends Adele{
//    email:string
//    constructor(name:string,age:number,email:string){
//     super(name,age)
//     this.email=email
//    }
//   getEmail(){
//    return this.email + "@gmail.com"
//   }
// }

// let Person  = new newAdele("okus",56,"travis")
// console.log(Person.getEmail()); 

// let  newAdele = new Adele("tunde",34)
// newAdele.name="travis"
// console.log(newAdele.getName())

// class Adele{
//    name:string
//    age:number
//    score:number
//    constructor(name:string,age:number,score:number){
//       this.name=name
//       this.age=age
//       this.score=score
//    }

//    getName(){
//       return this.name+ "peter"
//    }

//    getAge(){
//       return this.age+2
//    }

//    getScore(){
//       return this.score 
      
//    }
// }

// class newAdele extends Adele{
//    email:string
//    constructor(name:string,age:number,score:number,email:string){
//      super(name,age,score)
//      this.email=email
//    }

//    getEmail(){
//       return this.email +"@gmail.com"
//    }
// }

// let person = new newAdele("tunde",20,30,"travis")
// console.log(person.getScore());

class Adele{
   name:string
   age:Number
   score:number
   constructor(name:string,age:number,score:number){
      this.name=name
      this.age=age
      this.score=score
   }
   getNmae(){
      return this.name
   }

   getAge(){
      return this.age
   }

   getScore(){
      return this.score
   }
}

class newAdele extends Adele{
   email:string
   constructor(name:string,age:number,score:number,email:string){
      super(name,age,score)
      this.email=email
   }

   getEmail() {
      return this.email + "@gmail.com"
   }
}

let person = new newAdele("tunde",20,100,"travis")
console.log();

// abstract class is used to create a protected
// class but you can  only inherite from an
// abstrac class  