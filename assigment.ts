import travis, * as promptsync from "prompt-sync"

//  let prompt = travis();



// class Student{
//     name:string
//     school:string
//     constructor(name:string,school:string){
//         this.name=name
//         this.school=school
//     }

//     Name(){
//         return 'i am travis'
//     }

//     School(){
//         return 'i attend codelab'
//     }
// }

// let student = new Student("travis","codelab")
// consol(e.log(student.Name());
// console.log(student.School());

console.log("1");
console.log("2");
console.log(3);
console.log(4);
console.log(5);

let PreFunction=(cb:any)=>{
    cb()
}
PreFunction(()=>{
    console.log("travis");
})

console.log(6);
console.log(7);
console.log("codelab");
console.log("codelab1");
console.log("codelab2");
console.log("codelab");
console.log("codelab3");

const waitFor10sec= async(time:number)=>{
    let timmer = await new Date().getTime()
    console.log("i am thinking");
    while (new Date().getTime()< timmer+time) {
    }

    console.log("i'm done,you can continue");
}
waitFor10sec(10000)

let promise = new Promise((resolve,rejects)=>{

})

promise
.then((res)=>{
    console.log(res);
})
.catch((err:Error)=>{
    console.log(err);
})
.finally(()=>{
    console.log("finally i`m done");
})

console.log(6);
console.log(7);
console.log(8);

















//   let attendance=[]

//   let studentName=prompt("enter your name:")
 
//   let student={
//     name:studentName,
    
//   }

//   let pushstudent=attendance.push(student)
//   console.log(attendance)



