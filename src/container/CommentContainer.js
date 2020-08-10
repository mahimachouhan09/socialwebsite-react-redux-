import { connect } from 'react-redux';   
import { addComment } from "../actions/index"  
import CommentList from '../components/CommentList';
  
const mapStateToProps = state => ({
  comments: state.comments,
})

const mapDispatchToProps = ( dispatch ) => {  
    return {  
        onclick: () => dispatch (addComment())  
    };  
};  

export default  connect(mapStateToProps ,mapDispatchToProps)(CommentList)