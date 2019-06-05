import {downloadFile} from 'services/reportService';
import {DOWNLOAD_FILE_REQUEST, DOWNLOAD_FILE_SUCESS, DOWNLOAD_FILE_FAIL} from './actions';
const fileDownload = require("js-file-download");

export function download(type){
    return function(dispatch) {
        dispatch({
            type: DOWNLOAD_FILE_REQUEST,
            payload:{
                [type]: {
                    loading:true,
                }
            }
        });
        downloadFile(type)
            .then((res) => {
                dispatch({
                    type: DOWNLOAD_FILE_SUCESS,
                    payload:{
                        [type]: {
                            loading:false,
                        }
                    }
                });
                if(type == 'juridico') {
                    fileDownload(res.data, `${type}.pdf`);
                } else {
                    fileDownload(res.data, `${type}.xlsx`);
                }
                
            })
            .catch(err => {
                dispatch({
                    type: DOWNLOAD_FILE_FAIL,
                    payload:{
                        [type]: {
                            loading:false,
                        }
                    }
                });
            });
    };
};