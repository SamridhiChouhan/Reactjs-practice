let getRandomNumber = () => {
    let number = Math.floor(Math.random()*10);
    return number ;
}

let sum = (arr)=>{
    let sum = 0 ;
   for (let i = 0 ; i<arr.length ; i++){
     sum = sum + arr[i];
   }
   return sum ;
}

export {getRandomNumber , sum}