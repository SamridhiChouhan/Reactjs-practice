import {getRandomNumber , sum} from "./helper"

function Ticket (){
    let arr = [];

    let getTicket = (n)=>{
        // let arr = [];
        for(let i=1 ; i<=n; i++){
            let num = getRandomNumber();
            arr[i] = num;
        }
        return arr;
    }
    
    return ( <>
    <span>{getTicket(3)}</span>
    <p>{(sum(arr) != "15")?"Lost":"win"}</p>
    </> )
}

export default Ticket