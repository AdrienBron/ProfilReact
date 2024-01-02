import {useState} from "react";
import FormProfile from './../Profile/FormProfile.jsx'
export default function Props({onProfileSubmit, DefaultLastName, DefaultFirstName}) {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <button onClick={()=>{setVisible(!visible)}}>Edit</button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {visible && (<FormProfile onProfileSubmit={onProfileSubmit} DefaultLastName={DefaultLastName} DefaultFirstName={DefaultFirstName} />)}
        </>
    )
  }

  