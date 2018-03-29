import React from 'react';
import PropTypes from 'prop-types';


const CreateGameForm = function (props) {
    return (
        <div>
            <h2>CREATE A GAME</h2>
                <form onSubmit = {props.handleSubmit}>
                    <label>Owner:
                        <input name = "owner" type = "text" value = {props.owner} onChange={props.handleInputChange} />
                    </label>
                        <br />
                    <label>Title:
                        <input name = "title" type="text" value = {props.title} onChange = {props.handleInputChange} />
                    </label>
                        <input type= "submit"/> 
                </form>
        </div>
    )
}

CreateGameForm.propTypes = {
    owner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default CreateGameForm;