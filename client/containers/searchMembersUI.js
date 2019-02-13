import {connect} from 'react-redux';
import SearchInfo from "../components/search/searchInfo";
import {navigateToMember, searchMembers} from "../actions";
import {push} from "react-router-redux";

const mapStateToProps = (state) => {
    return {
        members: state.search,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchTyped: (e) => {
            if(e.target.value.length > 3 && (e.keyCode > 64 && e.keyCode < 91)) {
                dispatch(searchMembers(dispatch, e.target.value));
            }
        },
        onMemberClick: (id) => {
            dispatch(navigateToMember(dispatch, id));
            dispatch(push('/membros/' + id));
        }
    };
};


const SearchMembersUI= connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchInfo);

export default SearchMembersUI;