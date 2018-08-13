
const member = (member = {}, action) => {
    switch (action.type) {
        case "NAVIGATE_MEMBER":
            return action.member
        default:
            return member    
    }
}

export default member