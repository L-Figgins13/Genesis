import React from 'react';
import styled from 'styled-components';

const Stats = styled.div`
  padding: 2vmin;
  width: var(--width);
  height: var(--height);
  max-height: 18vh;
  line-height: 3vmin;
  h1{
    font-size: 3vmin;
    font-weight: bold;
    color: #1e160a;
    padding-bottom: 1.5vmin;
  }
  h2{
    font-weight: bold;
    font-size: 2vmin;
  }
  h3{
    font-size: 1.5vmin;
  }
 `

const Statistics = (props) => {
  
  return(
    <div>
      <Stats>
        <h1>Game Statistics:</h1>
        <h2>User:</h2><h3>{props.user.username}</h3>
        <h2>Lvl:</h2><h3>1</h3>
        <h2>Wins:</h2><h3>{props.user.stats.wins}</h3>
        <h2>Losses:</h2><h3>{props.user.stats.losses}</h3>
      </Stats>

       {/* {props.user.username}
       {props.user.stats.wins}
       {props.user.stats.losses} */}
    </div>
  )
}

export default Statistics;