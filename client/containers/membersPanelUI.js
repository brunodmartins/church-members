import { connect } from 'react-redux';
import MembersPanel from '../components/members/membersPanel/membersPanel';
import { navigateToMember } from '../actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
	return {
		members: state.members,
	};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		onMemberClick: (id) => {
			dispatch(navigateToMember(dispatch, id));
			dispatch(props.history.push('/membros/' + id));
		}
	};
};


const MembersPanelUI = connect(
	mapStateToProps,
	mapDispatchToProps
)(MembersPanel);

export default withRouter(MembersPanelUI);