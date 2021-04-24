import { connect } from 'react-redux';
import {removeError} from "../../actions/errorActions";
import {ErrorMessage} from "../components/ErrorMessage";

const mapStateToProps = state => {
    return {
        error: state.errorReducer.error
    };
};

const mapDispatchToProps = dispatch => ({
    closeErrorMessage() {
        return () => {
            dispatch(removeError())
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);