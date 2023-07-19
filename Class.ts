import PromptSync from "prompt-sync"

let aray:number[]=[1,2,3,4]
let ray: any[]=[1,1,1,1,1,"the boy",[1,2,3,4]]

// console.log(
//     aray.every((el)=>{
//         return el===1
//     })
// );

// console.log(ray[5]);

let up:number=6
let down:number[]=[]
const check=aray.findIndex((el)=> el === up)
const check1=aray.some((el)=>el ==up)
// console.log(check);
// console.log(check1);

if(check1){
    console.log("already exist");
}else{
    aray.push(up)
    console.log("you can go");
}

// console.log(aray);

const checkFor=(data:number[])=>{
let map = new Map()
for(let n of data){
    if(map.has(n)){
        return true;
    }else{
        map.set(n,true)
    }  
}
console.log(map);
    return false
}

console.log(checkFor(aray));

const checkForDup=(data:number[])=>{
    let map = new Map()
    for(let i of data){
        if(map.has(i)){
            return true
        }else{
            map.set(i,true)
        }
        console.log(i);
    }
    return false
}

let  ar:number[]=[1,2,3,4,2,4]
let ar1:number[]=[1,2]
// console.log(checkForDup(ar));

// for (let i of arr) {
    // //   console.log(i);
    // // }
    
    // let newArr = [1, 8, 9, 1];

    const newCheck=(data:number[])=>{
        let set = new Set(data)
        if(set.size===data.length){
            return true;
        }else{
            return false
        }
    }

    console.log(newCheck(aray));

//     let set = new Set([1, 2, 4, 4, 2]);
// console.log(set);

const checkTop=(short:string, long:string)=>{
 let shortArr:string[]=short.split("")
 let longArr:string[]=long.split("")

 let map = new Map()

 let joinArr= shortArr.concat(longArr)
 for(let el of joinArr){
    if(map.has(el)){
        return true
    }else{
        map.set(el,true)
    }
 }
}

console.log(checkTop("the long way home","the way home "));

const checkNote=(note:string, post:string)=>{
    let noteArr:string[]=note.split("")
    let postArr:string[]=post.split("")
    let check:boolean=true;
    let postObj:any={}
    
    postArr.forEach((word:string)=>{
        if(!postObj[word]){
            postObj[word]=1
        }else{
            postObj[word]++
        }
    })

    console.log("checking data:",postObj);

    noteArr.forEach((word:string)=>{
        if(postObj[word]){
        postObj[word]--;
        if(postObj[word]<0){
          check = false  
        }  
        }else{
            check=false
        }console.log(check);
        })
}

let noteData: string = "I can because i believe";
      
      let postData: string = "I can because i believe, yes i believe";
      
      checkNote("i believe i", "I believe i can yes can");


    //   find 7 array method that  return boolean before 6pm tomorrow

    // study about Node 

    const prompt = PromptSync()
    const database:string[]=[]
    const password:string=prompt("please input password")
    database.push(password)
    console.log(database);

    while(true){
        const password:string = prompt("please enter a new password")
        if(password.toLowerCase()==="exist"){
            console.log("you dont have a new password");
            break
        }else{
            let returnBoolean:boolean= database.some((el)=>{
                return el ===password
            })
            if(returnBoolean){
                console.log("this password has been used");
            }else{
                console.log("you have a new password");
            }
        }
    }

    // abstract class is used to protect the class...
    // stactic class is a method that cant be share by instance of a class
    // whenever there is an opp
    // abstract class Apreson{
    //     name:string
    //     age:number
    //     constructor(name:string,age:number){

    //     }
    // }


    

      
      
