import { connect } from 'react-redux'
import LoadingAPI from '../components/callback/loadingAPI';

const mapStateToProps = (state, props) => {
  return {
    isLoading: state.isLoading,
    children: props.children
  }
}

const LoadingUI = connect(
  mapStateToProps
)(LoadingAPI)

export default LoadingUI