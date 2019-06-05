import {DOWNLOAD_FILE_REQUEST, DOWNLOAD_FILE_SUCESS, DOWNLOAD_FILE_FAIL} from 'actions/actions';
var _ = require('lodash');

const reports = (reports = {
    juridico: {
        loading: false,
    },
    nascimento: {
        loading: false,
    },
    casamento: {
        loading: false,
    }
}, action) => {
	switch (action.type) {
	case DOWNLOAD_FILE_REQUEST:
    case DOWNLOAD_FILE_SUCESS:
    case DOWNLOAD_FILE_FAIL:
        
        return _.merge(Object.assign({}, reports), action.payload)
	default:
		return reports;
	}
};

export default reports;