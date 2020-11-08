import React from "react";
import "./Contact.css";
import PropTypes from 'prop-types';

function Contact(props) {
    return (
        <div>
            <div className="Contact">
                <img className="avatar" src={props.image}/>
                <div>
                    <p className="name">{props.name}</p>
                    <div className="status">
                        <span className={props.online ? "status-online" : "status-offline"}/>
                        <p className="status-text">{props.online ? "online" : "offline"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
Contact.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
};
export default Contact;