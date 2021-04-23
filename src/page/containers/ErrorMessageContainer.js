import { connect } from 'react-redux';
import {removeError} from "../../actions/errorAction";
import {ErrorMessage} from "../components/ErrorMessage";

const mapStateToProps = state => {
    return {
        error: state.errorReducer.error
    };
};

const mapDispatchToProps = dispatch => ({
    closeFunc() {
        return () => {
            dispatch(removeError())
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);