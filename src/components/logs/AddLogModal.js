import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'

const AddLogModal = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {


        if (message === '' || tech === '') {
            M.toast({ html: "Please fill out the form completely", classes: "red" })
        } else {
            console.log(message, tech, attention)
            setAttention(false);
            setTech('');
            setMessage('');
        }

    }
    return (
        <div id='add-log-modal' className='modal' style={styles}>
            <div className="modal-content">
                <h4>Enter Bug Information: </h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={event => setMessage(event.target.value)} />
                    </div>
                    <label htmlFor="message" className="active">Bug Message</label>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className="browser-default" onChange={event => setTech(event.target.value)}>
                            <option value="" disabled>Select Technition</option>
                            <option value="Minh Tran">Minh Tran</option>
                            <option value="Kurtis Sawvey">Kurtis Sawvey</option>
                            <option value="Matthew Shepelsky">Matthew Shepelsky</option>
                            <option value="Gary Wang">Gary Wang</option>
                        </select>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <p>
                                <label>
                                    <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={event => setAttention(!attention)} />
                                    <span>Needs Attention</span>
                                </label>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close btn blue">Enter</a>
            </div>
        </div>

    )

}
const styles = {
    width: '75%',
    height: '75%'
}

export default AddLogModal
