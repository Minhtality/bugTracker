import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const onSubmit = () => {

        if (firstName === '' || lastName === '') {
            M.toast({ html: "Please enter first and last name", classes: "red" })
        } else {
            console.log(`Technician ${firstName} ${lastName} has been added`)
            setFirstName('');
            setLastName('');
        }
    }
    return (
        <div id='add-tech-modal' className='modal'>
            <div className="modal-content">
                <h4>Add Technician: </h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstName" value={firstName} onChange={event => setFirstName(event.target.value)} />
                    </div>
                    <label htmlFor="firstName" className="active">First Name</label>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="lastName" value={lastName} onChange={event => setLastName(event.target.value)} />
                    </div>
                    <label htmlFor="lastName" className="active">Last Name</label>
                </div>

            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close btn blue">Enter</a>
            </div>
        </div>

    )

}


export default AddTechModal
