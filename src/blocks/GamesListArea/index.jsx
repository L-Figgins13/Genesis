import GameRow from './GameRow';
import styled from 'styled-components';

const GameListArea = styled.div`
  background: purple;
`;

GameListArea.GameRow = GameRow;

export default GameListArea;
