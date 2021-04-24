import { connect } from 'react-redux';
import { TopToolBar } from '../components/ToolBar';
import { logOut } from "../../actions/authAction";

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