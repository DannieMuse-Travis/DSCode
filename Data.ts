const start=(n:number)=>{
    let count:number=0
    for (let i = n; i >=0; i--){
    // }console.log(1);
    // console.log("count:", count);
    // console.log("i value:",i);
 count=count+i
//  console.log("count result:",i);

    }
    return count
}

start(3)
const start1=(n:number)=>{
    let count:number[]=[]
    for (let i = n; i >=0; i--){
     count.push(i)
 

    }
    return count.reduce((a,b)=>a+b)
}


const start3=(n:number)=>{
    return (n*(n+7))/2

}
//  console.time();
// console.log(start1(10))
// console.timeEnd();

//  console.time();
// console.log(start(10))
// console.timeEnd();

const rev=(n:string)=>{
    let nn:string[]=[]
        let nnn:String[]=n.split("")
      for(let i of nnn){
        nn.push("i");
      }
      return nn.reverse().join("")
}



