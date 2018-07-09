import React from "react";
import styled from "styled-components";

const CINPUT = styled.input`
  width: 200px;
`;

const ChatInput = function ChatInput(props) {
  return (
    <form onSubmit={props.sendMessage}>
      <CINPUT
        type="text"
        value={props.value}
        onChange={props.handleInputChange}
      />
    </form>
  );
};

export default ChatInput;
