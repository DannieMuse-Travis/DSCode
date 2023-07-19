import { rejects } from "assert";
import { promises } from "dns";
import { resolve } from "path";

console.log("1");       
console.log("2");
const people=(cb:any)=>{
   setTimeout(()=>{
    cb(null,"Data for response")
   },0.0000001)
    
}

people((err:Error,data:string)=>{

    if(err){
        throw err
    }else{
console.log(data);
    }
    
})

let title:string="i am a cb function"
console.log("3");
console.log("4");
console.log("5");

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

const makeCall=(time:number)=>{

}

import travis, * as promptsync from "prompt-sync"
 
let prompt=travis()

const login=()=>{
    const email=prompt("please enter your email:")
    const password=prompt("enter your password:")

    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            if(email==="muse@gmial.com" && password===
            "muse"){
                resolve("user auth is valid")
            }else {
                rejects("user auth failed")
            }
        },2000)
    })
} 

const HomePage=(userAuth:any)=>{
    return Promise.resolve(`welcome back: ${userAuth}`)
}
console.clear();
login()
.then((res)=>{
    console.log(res);
    return HomePage(res)
})
.then((res)=>{
    console.log(res);
})
.catch((err:Error)=>{
    console.log(err);
})