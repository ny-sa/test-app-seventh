//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
import React from 'react';

const note = () => {
  return (
    <div className="note">
      <h1>Title</h1>
      <p>Content</p>
    </div>
  );
}

export default note;