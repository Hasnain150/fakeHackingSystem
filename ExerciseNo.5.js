let messages=[
    "Initializing Hack Tool...",
    "Wait...",
    "Connecting To Instagram...",
    "Wait...",
    "Connection Failed,retrying...",
    "Wait...",
    "Connection Failed,retrying...",
    "Wait...",
    "Connection Successfull...",
    "Account Found : ",
    "Trying Brute Force...",
    "200K pattern Tried...",
    "NO MATCH FOUND...",
    "Another 200k pattern Tried...",
    "Match Found...",
    "Redirecting To the Account...",
    "///"
];

async function waiting(sec){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true)
        },sec*1000)
    })
}

// async function showHack(a){
//       await waiting(5);
//       console.log(a)

// }
//this is the syntax of iife
let xa=async(l)=>{
    window.location.href=`https://www.instagram.com/${l}`
}
(async ()=>{
    let aname=prompt("ENTER THE ACCOUNT NAME")
    let x=document.querySelector(".container");
    for(let a of messages){
        if(a=="Account Found : "){
            await waiting(2);
            
            x.innerHTML=x.innerHTML+"<p>"+a+ aname +"</p>"
        }else {

            await waiting(2);
            
            x.innerHTML=x.innerHTML+"<p>"+a+"</p>"
        }
    }
    await xa(aname);
})();