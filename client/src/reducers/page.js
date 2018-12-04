const initState = { numberPerPage: 7, currentPage: 1 };

const page = (state = initState, action) => {
    switch (action.type) {
        case "FORWARD":
            return {
                ...state,
                currentPage: state.currentPage + 1
            };
        case "BACKWARD":
            return {
                ...state,
                currentPage: state.currentPage - 1
            };

        default:
            return state;
    }
};

export default page;
