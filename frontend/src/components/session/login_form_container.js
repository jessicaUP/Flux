import { connect } from "react-redux";
import { hideModal } from "../../actions/modal_actions";
import LoginForm from "./login_form";

const { login } = require("../../actions/session_actions");

const mapSTP = state => ({
    errors: Object.values(state.errors.session)
})

const mapDTP = dispatch => ({
    login: user => dispatch(login(user)),
    hideModal: () => dispatch(hideModal())
});

export default connect(mapSTP, mapDTP)(LoginForm);