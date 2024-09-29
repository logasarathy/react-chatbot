import React from "react";
import { ChatDots, Person } from "react-bootstrap-icons";
export default function Chatmessage(props){
    return(
     <div className={`d-flex ${props.user && 'justify-content-end'}`}>
        {
props.user?(
    <span className="message-right">
        <span className="message-text">{props.message}</span>
        <Person/>
        {/* <i className="person"/> */}
        
    </span>
):(<span className="message-left">
    <ChatDots className="message-icons" />
<span className="message-text">{props.message}</span>
{/* <i className="chat-dot"/> */}

</span>)
        }

     </div>   
    )
}