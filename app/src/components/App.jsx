import React, {useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

const App = () => {
  let [update, goUpdate] = useState(0)
  const [notes, setNotes] = useState([])
  const populate = input => setNotes([...input]);

  const addNote = input => {
    fetch('/api', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    }).then(res => res.json())
      .then(data => console.log(data.res));
    goUpdate(update + 1);
  }
  const deleteNote = id => {
    fetch('/api', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({_id: id})
    }).then(res => res.json())
      .then(data => console.log(data.res));
    goUpdate(update + 1);
  };
  
  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => {
        populate(data);
        console.log('Re-rendered application')
      });
  }, [update]);

  return (
  <div>
    <Header />
    <CreateArea 
      handleAction={addNote}
    />
    {notes.map((note) => {
      return (
        <Note 
          id={note._id}
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