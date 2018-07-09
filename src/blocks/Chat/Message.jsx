import React from "react";

function Message(props) {
  return <div>{`${props.username}: ${props.message}`}</div>;
}

export default Message;
