import {connect} from 'react-redux';
import SearchInfo from "../components/search/searchInfo";
import {searchMembers} from "../actions";

const mapStateToProps = (state) => {
    console.log(state);
    return {
        members: state.search
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchTyped: (e) => {
            dispatch(searchMembers(dispatch, e.target.value));
        }
    };
};


const SearchMembersUI= connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchInfo);

export default SearchMembersUI;