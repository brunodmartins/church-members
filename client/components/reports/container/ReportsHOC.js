import {connect} from 'react-redux';
import ReportsUI from '../components/ReportsUI';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (store) => {
    return {};
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onReportDownload: () => {}
    }
}

const ReportsHOC = connect(mapStateToProps, mapDispatchToProps)(ReportsUI);

export default withRouter(ReportsHOC);