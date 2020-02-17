//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
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