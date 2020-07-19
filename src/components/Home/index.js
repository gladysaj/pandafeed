import React, { useState, useEffect } from 'react';

import BoardTable from '../../components/BoardTable';
import Onboarding from '../../components/Onboarding';
import { getBoards } from '../../services/board';

const Home = () => {
  const [boards, setBoards] = useState();

  useEffect(async () => {
    try {
      const response = await getBoards();
      setBoards(response.data);
    } catch (error) {
      console.log(error);
    }

    console.log(boards);
  }, []);

  const renderContent = () => {
    if (boards !== undefined && boards.length > 0) {
      return (
        <div>
          <h1>Your boards</h1>
          <BoardTable boards={boards} />
        </div>
      );
    }

    if (boards !== undefined) {
      return <Onboarding />;
    }
  };

  return <div>{renderContent()}</div>;
};

export default Home;
