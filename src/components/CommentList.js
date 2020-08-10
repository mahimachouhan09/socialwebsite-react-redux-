import React from "react";  
  
const commentList = ( { comments }) => (  
    <ul> 
    { comments.length} comments
        {comments.map( value => (  
            <li key = {value.id}>  
              {value.comment} by  {value.email}  
            </li>  
        ))  
    }
    </ul>  
);  
   
export default commentList;  