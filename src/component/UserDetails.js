import React , {useEffect, useState} from "react";

const UserDetails = () => {
  
  const [email, setemail] = useState()

  useEffect(() => {
    let getuser  =  localStorage.getItem('email');
    if (getuser) {
      setemail(getuser)
    }
  }, [])
  
  return (
    <div>
      <input type="text" className=" btn btn-primary " value={email || ""} disabled /> 
    </div>
  );
};

export default UserDetails;
