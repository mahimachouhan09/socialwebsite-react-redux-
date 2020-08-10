import { ADD_COMMENT } from "../actions/actionTypes";  

const comments = (state = [], action) => { 
  switch (action.type) {  
    case ADD_COMMENT:  
      return [
         ...state,{
          email: action.email,
          comment: action.comment,
        }
      ]
    default:  
      return state;  
  }  
};  

export default comments;  