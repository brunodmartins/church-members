import { connect } from 'react-redux';
import MemberForm from 'components/members/memberForm/memberForm';

const mapStateToProps = (state) => {
	return {
		member: state.member
	};
};

const MemberFormUI = connect(
	mapStateToProps
)(MemberForm);

export default MemberFormUI;
