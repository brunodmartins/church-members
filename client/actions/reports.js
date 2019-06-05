import {downloadFile} from 'services/reportService';
import {DOWNLOAD_FILE_REQUEST, DOWNLOAD_FILE_SUCESS, DOWNLOAD_FILE_FAIL} from './actions';
const fileDownload = require("js-file-download");

export function downloadJuridico(){
    return function(dispatch) {
        dispatch({
            type: DOWNLOAD_FILE_REQUEST,
            payload:{
                juridico: {
                    loading:true,
                }
            }
        });
        downloadFile("juridico")
            .then((res) => {
                dispatch({
                    type: DOWNLOAD_FILE_SUCESS,
                    payload:{
                        juridico: {
                            loading:false,
                        }
                    }
                });
                fileDownload(res.data, 'juridico.pdf');
            })
            .catch(err => {
                dispatch({
                    type: DOWNLOAD_FILE_FAIL,
                    payload:{
                        juridico: {
                            loading:false,
                        }
                    }
                });
            });
    };
};