// import userEvent from "@testing-library/user-event"

import { users } from "../contanst"

export const LoginAction = (data) => {
    return {
        type: users,
        data
    }
}