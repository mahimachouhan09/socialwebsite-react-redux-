import { LOGIN, ADD_COMMENT} from './actionTypes'

export const login = (email, postimg ,caption)=> ({
    type: LOGIN,
    email:  email,
    postimg: postimg,
    caption: caption
  }
)

export const addComment = (email, comment)=> ({
  type: ADD_COMMENT,
  email:  email,
  comment: comment
}
)
