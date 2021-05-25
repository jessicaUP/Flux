import { connect } from "react-redux";
import { fetchUserPlans } from "../../actions/plan_actions";
import UserPlans from "./user_plans";


const mapSTP = state => ({
    userId: state.session.user.id,
    plans: state.session.plans.user
});

const mapDTP = dispatch => ({
    fetchUserPlans: id => dispatch(fetchUserPlans(id))
});

export default connect(mapSTP, mapDTP)(UserPlans);