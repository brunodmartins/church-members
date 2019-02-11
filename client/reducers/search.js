const search = (result = [], action) => {
    switch (action.type) {
        case "LIST_SEARCH_MEMBERS":
            return action.result;
        default:
            return result;
    }
};

export default search;