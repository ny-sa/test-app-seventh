import React from 'react';

const footer = () => {
  let date = new Date();
  return (
    <footer>
      <p>Copyright {date.getFullYear()}</p>
    </footer>
  );
}

export default footer;