import React, { useState } from 'react';
import "./Messages.css"
import Message from './Message';


const Messages = () => {
    return (
        <div className='messages-container'>
           <Message/>
           <Message/>
           <Message/>
        </div>
    );
}

export default Messages;
