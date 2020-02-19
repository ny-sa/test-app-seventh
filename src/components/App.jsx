import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

const App = () => {
  const [notes, setNotes] = useState([{title:'This is a new note.', content:'This is some content'}])
  const addNote = input => setNotes([...notes, input]);
  const deleteNote = id => setNotes(prev => prev.filter((note, index) => index !== id));
  
  return (
  <div>
    <Header />
    <CreateArea 
      handleAction={addNote}
    />
    {notes.map((note, index) => {
      return (
        <Note 
          id={index}
          title={note.title}
          content={note.content}
          handleAction={deleteNote}
        />
      )
    })}
    <Footer />
  </div>
  );
};

export default App;