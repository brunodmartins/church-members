import {connect} from 'react-redux';
import ReportsUI from '../components/ReportsUI';
import { withRouter } from 'react-router-dom';
import {download} from 'actions/reports';

const mapStateToProps = (store) => {
    return {
        uiLoadingJuridico: store.reports.juridico.loading,
        uiLoadingNascimento: store.reports.nascimento.loading,
        uiLoadingCasamento: store.reports.casamento.loading,
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onPrintFile: (type) => {
            dispatch(download(type))
        }
    }
}

const ReportsHOC = connect(mapStateToProps, mapDispatchToProps)(ReportsUI);

export default withRouter(ReportsHOC);