import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';


const MemberStatusChangeDialog = ({handleClose, changeStatus}) => {
    const [reason, setReason] = useState('');    
    return (
        <div>
            <Dialog open={true} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Motivo</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Qual foi motivo da saída?
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="reason"
                        label="Motivo"
                        type="reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        fullWidth
                        
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={() => changeStatus(reason)} color="primary">
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default connect(
    null, (dispatch, props) => {
        return {
            changeStatus: (reason) => {
                console.log(!props.currentStatus, reason);
            }
        }
    }
)(MemberStatusChangeDialog);