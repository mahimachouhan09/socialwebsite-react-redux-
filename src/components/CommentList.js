import React from "react";  
  
const commentList = ( { comments }) => (  
    <ul className = 'comment-ul'> 
    { comments.length} comments
        {comments.map((value,key) => ( <ul key={key}>
            <li className ='comment-li' key = {value.id}>  
              {value.comment}  by <span><i> {value.email} </i></span>
            </li>  
        </ul>
        ))  
    }
    </ul>  
);  
   
export default commentList;  