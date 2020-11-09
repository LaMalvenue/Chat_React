import React from "react";
import Contact from "./Contact/Contact";

const contacts = [
    {
        name: 'Guts',
        avatar: 'https://static.myfigurecollection.net/pics/figure/big/481526.jpg',
        online: true
    },
    {
        name: 'Casca',
        avatar: 'https://i.ytimg.com/vi/nkFCnaYSBDE/hqdefault.jpg',
        online: false
    },
    {
        name: 'Griffith',
        avatar: 'https://i.pinimg.com/originals/ce/11/6e/ce116e263aa25fae791f02213c82b7f3.jpg',
        online: false
    },
    {
        name: 'Skull Knight',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-X_ZjlNqWRXao9Mx9P9LhF-nqFYFpxKcvZQ&usqp=CAU',
        online: true
    }
];

const ContactList = () => (
    <div>
        {contacts.map(contact => (
            <Contact name={contact.name} avatar={contact.avatar} online={contact.online} key={contact.name} />
        ))}
    </div>
);

export default ContactList;