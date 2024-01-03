import React, { useState, useEffect, useContext  } from 'react';
import './Profile.css';
import SubmitContext  from './../Props/Props.jsx';

function Profile({ onProfileSubmit, DefaultLastName,  DefaultFirstName}) {
  const Submit = useContext(SubmitContext);
  const [lastName, setLastName] = useState(DefaultLastName);
  const [firstName, setFirstName] = useState(DefaultFirstName);
  const [formIsValid, setFormIsValid] = useState(Submit);

  const handleSubmit = (e) => {
    e.preventDefault();
    onProfileSubmit({ lastName, firstName });
  };

  useEffect(() => {
    setFormIsValid(
      firstName.trim().length >= 1 && lastName.trim().length >= 1
    );
  }, [lastName, firstName]);

    return (
      <>
        <form onSubmit={handleSubmit}>
        <label>Last Name</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label>First Name</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <button type="submit" disabled={!formIsValid}>Submit</button>
      </form>
      </>
    )
  }
  
  export default Profile
  