import {getRandomNumber} from "./helper"

function Ticketno ({num}){
    // let number = Math.floor(Math.random()*10);
    let arr = []

    for(let i=1;i<=3;i++){
        let num =  getRandomNumber()
        arr[i] = num;
        console.log(arr)
    }
    return (
        <span>{arr}</span>
    ) 
}

export default Ticketno