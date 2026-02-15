import { useState } from "react"
import "./comment.css" ;
import CommentForm from "./commentForm";


function Comment(){
    let [comments , setComments] = useState([
      {
        username : "Samridhi" ,
        remark : "Great place to visit!!" ,
        rating : 5
      } 
    ]);

    let addNewComment = (comment)=>{
       setComments((currComments) => [...currComments, comment] )
    }

    return(
        <>
        <div className="commentBox">
            <h3>All Comments</h3>

            {
                comments.map((comment , idx)=>(
                    <div className="comment" key={idx}>
                        <b><i>-{comment.username}-</i></b><br/>
                        <p>{comment.remark}</p>
                        <p>Ratings : {comment.rating}</p>
                    </div>
                ))
            }
            
           
        </div>

        <CommentForm addNewComment={addNewComment}/>
        </>
    )
}

export default Comment