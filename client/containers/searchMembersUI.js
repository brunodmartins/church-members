import {connect} from 'react-redux';
import SearchInfo from "../components/search/searchInfo";
import {navigateToMember, listMembers} from "actions/members";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        members: state.members,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch: (value) => {
            dispatch(listMembers(value));
        },
        onMemberClick: (id) => {
            dispatch(navigateToMember(id));
            props.history.push('/membros/' + id);
        }
    };
};


const SearchMembersUI= connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchInfo);

export default withRouter(SearchMembersUI);
