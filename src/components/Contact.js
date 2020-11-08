import React from "react";
import "./Contact.css";

const onlineGuts = true;
const onlineCasca = false;

function Contact() {
    return (
        <div>
            <div className="Contact">
                <img className="avatar" src="https://images6.fanpop.com/image/photos/42700000/Guts-berserk-the-anime-manga-42723571-2048-2048.jpg"/>
                <div>
                    <p className="name">Guts</p>
                    <div className="status">
                        <span className={onlineGuts ? "status-online" : "status-offline"}/>
                        <p className="status-text">{onlineGuts ? "online" : "offline"}</p>
                    </div>
                </div>
            </div>
            <div className="Contact">
                <img className="avatar" src="https://i.ytimg.com/vi/nkFCnaYSBDE/hqdefault.jpg"/>
                <div>
                    <p className="name">Casca</p>
                    <div className="status">
                        <span className={onlineCasca ? "status-online" : "status-offline"}/>
                        <p className="status-text">{onlineCasca ? "online" : "offline"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;