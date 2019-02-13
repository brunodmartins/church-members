import {connect} from 'react-redux';
import SearchInfo from "../components/search/searchInfo";
import {searchMembers} from "../actions";

const mapStateToProps = (state) => {
    return {
        members: state.search,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchTyped: (e) => {
            if(e.target.value.length > 3) {
                dispatch(searchMembers(dispatch, e.target.value));
            }
        }
    };
};


const SearchMembersUI= connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchInfo);

export default SearchMembersUI;