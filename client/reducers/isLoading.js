const isLoading = (isLoading = false, action) => {
    switch (action.type) {
        case "DATA_COMPLETE":
            return action.isLoading
        case "LOAD_DATA":
            return action.isLoading
        default:
            return isLoading
    }
}

export default isLoading