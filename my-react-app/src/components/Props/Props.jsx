import React, { useState, useEffect } from 'react';
import FormProfile from './../Profile/FormProfile.jsx'

const SubmitContext = React.createContext({
    Submit: false,});

export default function Props({onProfileSubmit, DefaultLastName, DefaultFirstName}) {
    const [visible, setVisible] = useState(false);
    const [Submit, setSubmit] = useState(false);
    useEffect(() => {
        setSubmit(
            DefaultLastName.trim().length >= 1 && DefaultFirstName.trim().length >= 1
        );
      }, []);

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
            <SubmitContext.Provider
            value={{
                isLoggedIn: Submit,
            }}
            >
            </SubmitContext.Provider>
        </>
    )
  }

  