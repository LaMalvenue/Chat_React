import React from "react";
import "./Contact.css";
import PropTypes from 'prop-types';

function Contact({name, image, online}) {
    return (
        <div>
            <div className="Contact">
                <img className="avatar" src={image}/>
                <div>
                    <p className="name">{name}</p>
                    <div className="status">
                        <span className={online ? "status-online" : "status-offline"}/>
                        <p className="status-text">{online ? "online" : "offline"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
Contact.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    online: PropTypes.bool
};
export default Contact;