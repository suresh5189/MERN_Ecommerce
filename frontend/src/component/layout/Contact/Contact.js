import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:ss0305@srmist.edu.in">
        <Button>Contact: ss0305@srmist.edu.in</Button>
      </a>
    </div>
  );
};

export default Contact;