import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getBoard } from '../../services/board';

// 1. Llama al service de getBoard y guarda el resultado en una var que se llame response
// 2. Setea en un state llamado board (con setBoard) el resultado (response.data)
// 3. En lugar de que este componente renderee "Hola", que renderee el board title (lo accedes desde el state de board)

const fetch = async (url, setBoard) => {
  try {
    const response = await getBoard(url);
    setBoard(response.data);
  } catch (error) {
    console.log(error);
  }
};

const Board = () => {
  const history = useHistory();
  const [board, setBoard] = useState();

  useEffect(() => {
    fetch(history.location.pathname, setBoard);
  }, []);

  const renderTitle = () => {
    if (board !== undefined) {
      return <h1>{board.title}</h1>;
    } else {
      return null;
    }
  };

  return renderTitle();
};

export default Board;
