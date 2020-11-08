import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/men/78.jpg"/>
            <div>
                <p className="name">Charles Ingalls</p>
                <div className="status">
                    <span className="status-online"/>
                    <p className="status-text">online</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;