import React from 'react';
import ChatMessage from './ChatMessage';

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

//Map over the messages prop that was just provited to ChatStream
const ChatStream = (props) => {
  console.log(props);
  return (
    <section className='chat-stream'>
      {props.messages.map((message) => {
        let messageType;
        if (message.user === props.currentUser) {
          messageType = "sent";
        } else {
          messageType = "received";
        }
        return (
          <ChatMessage
            user={message.user}
            message={message}
            messageType={messageType}
          />
        );
      })}
    </section>
  )};

export default ChatStream;
