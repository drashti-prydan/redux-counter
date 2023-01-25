import { ADD, CLEAR, SUB, SWEET } from "../contanst";

const intialState = {
    count: 0,
};
const counterData = (state = intialState, action) => {
    switch (action.type) {
        case ADD: {
            return {
                count: state.count + 1
            };
        }
        case SUB: {
            return {
                count: state.count - 1
            };
        }
        case SWEET: {
            return {
                count: state.count
            }   
        }
        case CLEAR: {
            return {
                count:0
             }
        }
        // Swal.fire("Are you sure clear counter value...?","",
        // icon:"danger")
        // 
        default:
            return state;
    }
}

export default counterData