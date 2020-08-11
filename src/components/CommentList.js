import React from "react";  
  
const commentList = ( { comments }) => (  
    <ul className = 'comment-ul'> 
    { comments.length} comments
        {comments.map( value => (  
            <li className ='comment-li' key = {value.id}>  
              {value.comment} by  {value.email}  
            </li>  
        ))  
    }
    </ul>  
);  
   
export default commentList;  