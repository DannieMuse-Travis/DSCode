
// let time:number=0;

// setInterval(()=>{
//     console.log(time++ % 5);
// },1000)

console.log("codelab");
console.log("codelab1");
console.log("codelab2");
console.log("codelab");
console.log("codelab3");

// const waitFor10sec= async(time:number)=>{
//     let timmer = await new Date().getTime()
//     console.log("i am thinking");
//     while (new Date().getTime()< timmer+time) {
//     }

//     console.log("i'm done,you can continue");
// }
// waitFor10sec(10000)


// const waitFor10sec=(timer:number)=>{
//     let timmer =  new Date().getTime()
//     console.log("Done ");
//     setTimeout(()=>{
//         console.log();
//     })
// }

// waitFor10sec(10000)

// setTimeout(()=>{
//     console.log("Quit in 10");
// })


const work =(cb:any)=>{
 cb()
}

work(()=>{
    console.log("start again");
})


console.log("codelab4");
console.log("codelab5");
console.log("codelab6");