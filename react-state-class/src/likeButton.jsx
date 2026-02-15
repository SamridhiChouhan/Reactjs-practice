import { useState } from "react";

function likeButton(){
    let [isLiked , setIsLiked] = useState(false);
    let [count,setCount] = useState(0);

    let toggleLike = ()=>{
        setIsLiked(!isLiked);
        if(!isLiked){
            setCount(count+1)
        }
    }
 
    return(
        <div>
            <h2>This is the post</h2>
            <p onClick={toggleLike} >
                 {isLiked ? (
                  <span className="heart"   style={{fontSize:"2rem" , color:"red"}}>&#10084; </span>
            ):(
                  <span className="heart"  style={{fontSize:"2rem", color:"white"}}>&#10084; </span>
            )}
            <span >{count}</span>
            </p>
        </div>
    )
}

export default likeButton