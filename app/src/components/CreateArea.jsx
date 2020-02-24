import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [expand, setExpand] = useState(false);

  const [input, setInput] = useState({title:'', content:''});

  const handleChanges = event => {
    const {name, value} = event.target;
    setInput(prev => ({...prev, [name]:value}));
  }

  return (
    <div>
      <form className="create-note">
        <input 
          onChange={handleChanges} 
          name="title" 
          placeholder="Title" 
          value={input.title}
          hidden={expand ? false : true}/>
        <textarea 
          onClick={()=>setExpand(true)}
          onChange={handleChanges} 
          name="content" 
          placeholder="Take a note..." 
          rows={expand ? "3" : "1"} 
          value={input.content}/>
        <Zoom in={expand ? true : false}>
          <Fab onClick={(e) => {
            e.preventDefault();
            props.handleAction(input);
            setInput({title:'', content:''});
          }}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
