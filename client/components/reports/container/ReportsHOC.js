import {connect} from 'react-redux';
import ReportsUI from '../components/ReportsUI';
import { withRouter } from 'react-router-dom';
import {downloadJuridico} from 'actions/reports';

const mapStateToProps = (store) => {
    return {};
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onPrintJuridico: () => {
            dispatch(downloadJuridico())
        }
    }
}

const ReportsHOC = connect(mapStateToProps, mapDispatchToProps)(ReportsUI);

export default withRouter(ReportsHOC);