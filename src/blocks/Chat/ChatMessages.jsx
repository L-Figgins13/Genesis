import React from "react";

import Message from "./Message";

const ChatMessages = props => {
  const messages = props.messages.map((message, index) => (
    <Message
      key={index}
      username={message.username}
      message={message.message}
    />
  ));

  return <div>{messages}</div>;
};

export default ChatMessages;
