import { connect } from 'react-redux';
import MemberForm from 'components/members/memberForm/memberForm';
import {navigateToMember} from 'actions/members';

const mapStateToProps = (state) => {
	return {
		member: state.member
	};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		onSave: (member) => {
			console.log(member);
		}
	};
};

const MemberFormUI = connect(
	mapStateToProps,mapDispatchToProps
)(MemberForm);

export default MemberFormUI;
