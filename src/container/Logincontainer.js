import { connect } from 'react-redux';
import { login } from '../actions/index';
import PrintLogin from '../components/PrintLogin';

const mapStateToProps = state => ({
    login: state.login,
 } )

const mapDispatchToProps = dispatch => ({
    onclick: () => dispatch(login()),
})
export default connect( mapStateToProps, mapDispatchToProps)(PrintLogin)