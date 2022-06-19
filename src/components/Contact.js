// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

import "./Contact.css";

const Contact = ({ data }) => {
  return (
    <>
      <div className="container-contacts">
        <div className="profile-img">
          <img src={data.photo} alt="img-profile" className="picture"></img>
        </div>
        <div className="profile">
          <h4 className="profile-name">{data.name}</h4>
          <p className="profile-phone">{data.phone}</p>
          <p className="profile-email">{data.email}</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
