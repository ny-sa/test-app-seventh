import React, {useState} from "react";

function CreateArea(props) {
  const [input, setInput] = useState({title:'', content:''});

  const handleChanges = event => {
    const {name, value} = event.target;
    setInput(prev => ({...prev, [name]:value}));
  }

  return (
    <div>
      <form>
        <input 
          onChange={handleChanges} 
          name="title" 
          placeholder="Title" 
          value={input.title}/>
        <textarea 
          onChange={handleChanges} 
          name="content" 
          placeholder="Take a note..." 
          rows="3" 
          value={input.content}/>
        <button onClick={(e) => {
          e.preventDefault();
          props.handleAction(input);
          setInput({title:'', content:''});
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
