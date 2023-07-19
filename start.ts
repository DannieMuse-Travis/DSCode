// leetcode
// map:
// set


// create a system that if the user use a password that alread exist theyy cant add up again...
// assigment
let array:number[]=[1,2,3,4,]
let boy:any[]=[1,1,1,1,"the boy",{name:"travis"},[0,4]]

// console.log(array.every(el)=>{
//     return el==1
// })
let pass:number=6;
let stored:number[]=[];
// findindex returns 0 or -1

// const check=array.findIndex((el)=>el===pass)
// const check1=array.some((el)=>el==pass)
// console.log(check);
// console.log(check1);

// if (check1) {
//     console.log("already exist");
// } else {
//    array.push(pass) 
//    console.log("you can go head");
// }


// const checkFor=(data:number[])=>{
//     let map= new Map()
//       for(let n of data){
//      if (map.has(n)){
//       return true
//     }
//       map.set(n,true)
//    }
// }
// console.log(checkFor(array));

// const checkFor=(data:Number[])=>{
//     let map = new Map()
//     for(let  i of data){
//     if (map.has(i)){
//         return true
//     } else{
//         map.set(i,true)
//     }
//     }
//     return false
// }
// console.log(checkFor(array));


// let newArr=[1,8,9,1,5]
// let newSet= new Set(newArr)
// console.log(newSet);

// zize print out the length  

//  let newArr =[1,2,4,8,9]
//  const newCheck=(data:number[])=>{
//     let set = new Set(data)
//     if (set.size===data.length) {
//         return true
//     } else {
//         return false
//     }
//  }

// set remove the duplicate and return the unique value


const checkDup=(short:string,
    long:string)=>{
        let shortArr:string[]=short.split("")
        let longArr:string[]=long.split("")

        let map= new Map()
        let joinArr = shortArr.concat(longArr)

        for(let el of joinArr){
            if(map.has(el)){
                return true
            }else {
                return map.set(el,true)
            }
           
        }
        return false
    }
console.log(checkDup("the long way home","Way"));


// study data structure and Algori

// const checkNote=(note:string,
    // post:string)=>{
    //     let noteArr:string[]= note.split("")
    //     let postArr:string[]= note.split("")

    //     let postObj:any={}
    //     postArr.forEach((word:string) => {
    //         if (!postObj[word]) {
    //             postObj[word] = 0;
    //         }else {
    //             postObj[word]++;
    //         }
    //     });
    // }
    // let noteData:string="i can because i believe"
    // let postDate:string="i  can because i believe,yes i believe"

    // checkNote(noteData,postDate)
    // checkNote("", "i can  because i believe")

    // write a sentence print out the highest frequency-assigment
// create a system that check if a password already exist
// make 










// create a class nobody should be able to update the class outside the class....
// let a: number[] = [1, 2, 3, 4];
// let aa: any[] = [1, 1, 1, 1, "the Boy", { name: "Peter" }, [0, 4]];

// // console.log(
// //   aa.every((el) => {
// //     return el === 1;
// //   }),
// // );

// // console.log(aa[2]);
// let pass: number = 6;
// let stored: number[] = [];

// const check = a.findIndex((el) => el === pass);
// const check1 = a.some((el) => el === pass);

// // console.log(check);
// // console.log(check1);

// // if (check1) {
// //   console.log("Already exist");
// // } else {
// //   a.push(pass);
// //   console.log("You can go ahead");
// // }

// // console.log(a);

// // const checkFor = (data: number[]) => {
// //   let map = new Map();
// //   for (let n of data) {
// //     if (map.has(n)) {
// //       return true;
// //     } else {
// //       map.set(n, true);
// //     }
// //   }
// //   console.log(map);
// //   return false;
// // };

// // console.log(checkFor(a));

// const checkForDuplicate = (data: number[]) => {
//   let map = new Map();
//   for (let i of data) {
//     if (map.has(i)) {
//       return true;
//     } else {
//       map.set(i, true);
//     }
//     console.log(i);
//   }
//   return false;
// };
// let arr: number[] = [1, 2, 3, 4, 2, 4];
// let arr1: number[] = [1, 2];
// // console.log(checkForDuplicate(arr));

// // for (let i of arr) {
// //   console.log(i);
// // }

// let newArr = [1, 8, 9, 1];

// const newCheck = (data: number[]) => {
//   let set = new Set(data);
//   if (set.size === data.length) {
//     return true;
//   } else {
//     return false;
//   }
// };

// // console.log(newCheck(newArr));

// // let set = new Set([1, 2, 4, 4, 2]);
// // console.log(set);

// const checkDup = (short: string, long: string) => {
//   let shortArr: string[] = short.split(" ");
//   let longArr: string[] = long.split(" ");

//   let map = new Map();

//   let joinArr = shortArr.concat(longArr);
// /   for (let el of joinArr) {
    //     if (map.has(el)) {
    //       return true;
    //     } else {
    //       map.set(el, true);
    //     }
    //   }
    //   return false;
    // };
    
    // console.log(checkDup("The long way Home", "way The"));
    
    
    
    // const checkNote = (note: string, post: string) => {
    //     let noteArr: string[] = note.split(" ");
    //     let postArr: string[] = post.split(" ");
    //     let check: boolean = true;
    //     let postObj: any = {};
      
    //     postArr.forEach((word: string) => {
    //       if (!postObj[word]) {
    //         postObj[word] = 1;
    //       } else {
    //         postObj[word]++;
    //       }
    //     });
      
    //     console.log("checking data: ", postObj);
    //   }
    //   noteArr.forEach((word: string) => {
    //       if (postObj[word]) {
    //         postObj[word]--;
    //         if (postObj[word] < 0) {
    //           check = false;
    //         }
    //       } else {
    //         check = false;
    //       } console.log(check)
    //     });
      
       
      
      
    //   let noteData: string = "I can because i believe";
      
    //   let postData: string = "I can because i believe, yes i believe";
      
    //   checkNote("i believe i", "I believe i can yes can");
  















