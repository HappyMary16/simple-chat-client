import { connect } from 'react-redux';
import { TopToolBar } from '../components/ToolBar';
import { logOut } from "../../actions/authActions";

const mapStateToProps = state => {
    return {
        isAuthorized: state.authReducer.isAuthorized
    };
};

const mapDispatchToProps = dispatch => ({
    logOut() {
        return () => {
            dispatch(logOut());
        };
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TopToolBar);