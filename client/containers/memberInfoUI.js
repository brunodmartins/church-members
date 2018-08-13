import { connect } from 'react-redux';
import MemberInfo from '../components/members/memberInfo/memberInfo';

const mapStateToProps = (state) => {
	return {
		member: state.member
	};
};

const MemberInfoUI = connect(
	mapStateToProps
)(MemberInfo);

export default MemberInfoUI;