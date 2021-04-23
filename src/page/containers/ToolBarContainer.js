import { connect } from 'react-redux';
import { TopToolBar } from '../components/ToolBar';
import { logOut } from "../../actions/authAction";

const mapStateToProps = state => {
    return {
        username: state.authReducer.username
    };
};

const mapDispatchToProps = dispatch => ({
    logOutFunc() {
        return () => {
            dispatch(logOut());
        };
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TopToolBar);