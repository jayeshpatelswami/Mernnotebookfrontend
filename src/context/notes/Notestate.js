/* eslint-disable no-unused-vars */
import { useState } from "react";
import noteContex from "./NoteContex";

const Notestate = (props) => {
  const note = [ ];
  // const host = process.env.REACT_APP_PORT;
   const host = process.env.REACT_APP_API_URL
  const [notes, setnotes] = useState(note);






  //get all notes of user
  const getnote = async (id) =>{
    
    const response = await fetch( `${host}/api/notes/fetchallnotes`, {
    // const response = await fetch( `${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem('token')
      }
    });
    const json  = await response.json();
 
    setnotes(json)
    

  } 




  //add new note
  const addnote = async (title , description)=>{

    const response = await fetch( `${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem('token')
      }, body: JSON.stringify({title ,description}), 
    });
    
    const notess = await response.json();
    setnotes(notes.concat(notess))

   
    
  }
    

  
 
 
  //delete  note
  const deletenote = async(id)=>{
    const response = await fetch( `${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem('token')
      }
    });
    const json =response.json();
    
    
    const newnote = notes.filter((note)=>{return note._id!== id}) 
    setnotes(newnote)
   
  }
  
  
  //edit  note
  const editnote =  async (id,title,description)=>{

    const response = await fetch( `${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem('token')
      }, body: JSON.stringify({title ,description}), 
              
    });
    const json = await response.json();
    
    
    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        break;
      }
    }
    setnotes(newNotes);
  }
  

  
  return (
    <noteContex.Provider value={{ notes, addnote , deletenote , editnote , getnote }}>
      {props.children}
    </noteContex.Provider>
  );
};

export default Notestate;
