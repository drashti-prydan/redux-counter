// import { LoginAction } from "../action/LoginAction"
// import { Action } from "@remix-run/router";
import { users } from "../contanst"

// import state from "sweetalert/typings/modules/state";
const initialevalue = {
    isvalid: false
}

const userData = (state = initialevalue,LoginAction) => {

    switch (LoginAction.type) {
        case users: 
            return { ...state, isvalid: LoginAction.data };
        

        default:
            return state;
    }
}
export default userData