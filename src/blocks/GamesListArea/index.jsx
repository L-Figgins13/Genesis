import GameRow from './GameRow';
import GameTable from './GameTable';
import styled from 'styled-components';

const GameListArea = styled.div`
  background: purple;
`;

GameListArea.GameRow = GameRow;
GameListArea.GameTable = GameTable;

export default GameListArea;
