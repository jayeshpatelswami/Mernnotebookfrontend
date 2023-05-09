import noteContext from "../context/notes/NoteContex"
import React , { useState ,useContext} from 'react'

const Addnote = () => {

    const context = useContext(noteContext);
    
    const { addnote } = context;
    
    const [note, setdnote] = useState({title: "" ,description:"" })
  const handalsubmit = (e) =>{
    e.preventDefault();
    addnote(note.title,note.description);
    setdnote({title: "" ,description:"" });
  }
 
  const onchanged = (e) =>{
    setdnote({...note , [e.target.name] : e.target.value})
  } 
  return (
    <>

<div className='container'  >
      <h2>Add New Note Hear</h2>
      <form>
  <div className="mb-3">
    <label htmlFor="title"   className="form-label">Title of Note</label>
    <input type="text" className="form-control" required minLength={3} value={note.title} onChange={onchanged} name="title" id="title"/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" required minLength={5}  value={note.description} onChange={onchanged} name="description" id="description"/>
  </div>
  <p>please enter a value with minimum 5 characters of each entity to add data </p>
  <button disabled={note.title.length < 3 || note.description.length < 5 }type="submit" onClick={handalsubmit} className="btn btn-primary">Add Note</button>
</form>
    </div>


    </>
  )
}

export default Addnote
