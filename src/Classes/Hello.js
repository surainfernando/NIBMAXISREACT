import React from 'react';
import { useHistory } from 'react-router-dom';

const Hello = () => {
  const history = useHistory();
  const handleClick = () => history.push('/Home');
  
  return (
    <button type="button" onClick={handleClick}>
      Goodbye
    </button>
  );
};

export default Hello;