
import noteContext from "../context/notes/NoteContex"
import React , { useContext} from 'react'
const Noteitem = (props) => {
  
  
  const context = useContext(noteContext);
  const { note , update  } = props;
  
  

  const { deletenote } = context;
  


 

  return (

    <>
     <div className="col-md-3 my-3" >
      <div className="card " >
        <div className="card-body">
          <h5 className="card-title"> {note.title}</h5>
          <p className="card-text"> {note.description} </p>
          <i className="bi bi-trash3 mx-4" onClick={()=>{deletenote(note._id)}}></i>
          <i className="bi bi-pen" onClick={()=>{update(note)}} ></i>
          </div>
      </div>
   </div>

    </>
  );
};

export default Noteitem;
