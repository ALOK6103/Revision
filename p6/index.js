

const sub=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const result=false 

        if(result) resolve("Subscribe")
        else reject("Unsubscribe")
    },5000)
})


sub.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

console.log("yes")
