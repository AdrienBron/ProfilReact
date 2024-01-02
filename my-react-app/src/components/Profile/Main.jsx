import React, { useState } from 'react';
import Props from './../Props/Props.jsx';

function Main() {
  const [profileData, setProfileData] = useState({lastName:"Bron",firstName:"Adrien"});

  const handleProfileSubmit = (data) => {
    setProfileData(data);
  };

  return (
    <>
      <h1>Mon profil</h1>
      <label>Last Name: {profileData.lastName}</label>
      <br />
      <label>First Name: {profileData.firstName}</label>
      <br />
      <Props onProfileSubmit={handleProfileSubmit} DefaultLastName={profileData.lastName} DefaultFirstName={profileData.firstName} />
    </>
  );
}

export default Main;
