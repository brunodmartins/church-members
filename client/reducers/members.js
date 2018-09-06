const members = (members = [], action) => {
    switch (action.type) {
        case "LIST_MEMBERS":
            return action.members;
        default:
            return members;
    }
};

export default members;