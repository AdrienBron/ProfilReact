import React, { useState } from 'react';
import './Profile.css';

function Profile({ onProfileSubmit, DefaultLastName,  DefaultFirstName}) {
  const [lastName, setLastName] = useState(DefaultLastName);
  const [firstName, setFirstName] = useState(DefaultFirstName);

  const handleSubmit = (e) => {
    e.preventDefault();
    onProfileSubmit({ lastName, firstName });
  };

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
        <button type="submit">Submit</button>
      </form>
      </>
    )
  }
  
  export default Profile
  