/* eslint-disable no-undef */
import  React  , { useContext , useEffect ,useRef , useState} from 'react'
import noteContex from "../context/notes/NoteContex"
import Noteitem from './Noteitem';
import Addnote from './Addnote';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Note = () => {
    
  const context = useContext(noteContex);
  const history = useHistory();
  const { notes ,getnote , editnote} = context;
  
  const ref  = useRef(null)
  const refclose  = useRef(null)

  const [note, setnote] = useState({id:"" ,etitle:"",edescription:""})
  useEffect(() => {
    if(localStorage.getItem('token')){
    getnote();
    }
    else{
      history.push("/login")
    }
    // eslint-disable-next-line
  },[]);

  const updatenote = (currentNote) =>{
    ref.current.click();
    setnote({id:currentNote._id ,etitle:  currentNote.title , edescription:currentNote.description })
  }
  const handalclick = (e) =>{
    // console.log("Updated note :" , note);
    refclose.current.click();
    editnote(note.id,note.etitle,note.edescription)
  }
  
  const onchanged = (e) =>{
    setnote({...note , [e.target.name] : e.target.value})
  } 

  return (
    <>
     <Addnote/>
  
<button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={ref} data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
  <div className="mb-3">
    <label htmlFor="etitle"   className="form-label">Title of Note</label>
    <input value={note.etitle} type="text" className="form-control" onChange={onchanged} name="etitle" id="etitle"/>
  </div>
  <div className="mb-3">
    <label htmlFor="edescription" className="form-label">Description</label>
    <input value={note.edescription}  type="text" className="form-control" onChange={onchanged} name="edescription" id="edescription"/>
  </div>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" ref={refclose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handalclick}>Save changes</button>
      </div>
    </div>
  </div>
</div>
     

   <div className="row my-3">
    <h2>Your Notes</h2>
    <div className="container new-line" style={{whiteSpace:"pre-line"}}>

      {notes.length ===0 &&    "\nNo Notes :( \n \nadd some notes to know my website :)"  }
    </div>
    {notes.map((notes)=>{
    
      return   <Noteitem key={notes._id} update={updatenote} note={notes} />
      // return <Noteitem key={note._id} note={note} /> 
    })}
   </div>

    </>
  )
}

export default Note
