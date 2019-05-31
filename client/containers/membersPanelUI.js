import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import MembersPanel from '../components/members/membersPanel/membersPanel';
import { navigateToMember } from '../actions';

const mapStateToProps = (state) => {
	return {
		members: state.members,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onMemberClick: (id) => {
			dispatch(navigateToMember(dispatch, id));
			dispatch(push('/membros/' + id));
		}
	};
};


const MembersPanelUI = connect(
	mapStateToProps,
	mapDispatchToProps
)(MembersPanel);

export default MembersPanelUI;