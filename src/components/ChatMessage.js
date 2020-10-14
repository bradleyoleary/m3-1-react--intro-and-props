import React from 'react';

import './ChatMessage.css';

const ChatMessage = (props) => {
  if (props.messageType === 'sent') {
    return <SentMessage message={props.message} />;
  } else {
    return <ReceivedMessage message={props.message} />;
  }
};

const SentMessage = (props) => {
  console.log(props)
  return (
    <div className="chat-message-sent">
      <div id="sender-text-box" className = "text-box">
        <span className = "sender-text-body">
          {props.message.body}
        </span>
      </div>
    </div>
  );
}

const ReceivedMessage = (props) => {
  console.log(props)
  return (
    <div className = "chat-message-received">
      <div className = "received-name-box">{props.message.user.username}</div>
      <div className = "text-box">
        <span>
          <img className = "avatar" src = {props.message.user.avatar} />
        </span>
        <span className = "text-body"> {props.message.body} </span>
      </div>
    </div>
  )
}

export default ChatMessage;