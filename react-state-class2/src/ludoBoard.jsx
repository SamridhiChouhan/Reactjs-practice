import { useState } from "react"

function ludo ({color}){
    // let moves = 0;
    let [count,setCount] = useState(0);
    let style = {backgroundColor : `${color}`}

    let onclick = ()=>{
       setCount(count+1);
       console.log(count)
    }
    return (
        <>
        <p>{color} moves : {count}</p>
        <button onClick={onclick} style={style}>+1</button>
        </>
    )    
}

export default ludo