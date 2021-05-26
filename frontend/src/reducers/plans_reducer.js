import { RECEIVE_EMAIL, RECEIVE_PLAN, RECEIVE_USER_PLANS } from "../actions/plan_actions";


const initialState = {
    userPlans: undefined,
    new: undefined,
    email: undefined
}

const plansReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PLAN:
            newState.new = action.plan.data;
            return newState;
        case RECEIVE_USER_PLANS:
            newState.userPlans = action.plans.data;
            return newState;
        case RECEIVE_EMAIL:
            debugger
            newState.email = action.email.data;
            return newState;
        default:
            return state;
    }
};

export default plansReducer;