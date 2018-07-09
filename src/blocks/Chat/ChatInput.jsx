import React from "react";
import styled from "styled-components";

const CINPUT = styled.input`
  width: 200px;
`;
//bleh
const ChatInput = function(props) {
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
