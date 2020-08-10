import { LOGIN } from '../actions/actionTypes';

const login = (state = [], action) => {
  switch(action.type) {
    case LOGIN:
      return [
        ...state,{
        email: action.email,
        postimg: action.postimg,
        caption: action.caption
        }
      ]
    default: return state
  }
}
  
export default login;