import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { Dialog } from '@material-ui/core';

const LoadingDialog = ({loading}) => {
    return (
        <Dialog open={loading}>
            <CircularProgress />
        </Dialog>
    );
};

export default connect((store, props) => {
    return {
        loading: props.loading,
    }
})(LoadingDialog)