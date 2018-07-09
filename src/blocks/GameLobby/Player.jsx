import React from "react";

const Player = props => (
  <div>
    <div>
      {/* <div>{props.player.user_id}</div> */}
      <div>
        <h2>{props.player.username}</h2>
      </div>
    </div>
  </div>
);

export default Player;
