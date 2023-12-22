import React from "react";
const username = "sushanta";
const useremail = "susantadas@gmail.com";
const userage = "23";
import dp from "../assets/dp.jpeg";
export const Profile = () => {
  return (
    <div className="component" id="studentProfile">
      <div className="student">
        <div className="dp">
          <img src={dp} alt="dp" style={{ width: "9vw" }} />
        </div>
        <div className="infoContainer">
          <div className="name">Suhanta das </div>
          <div className="studentInfo">Email: </div>
          <div className="studentInfo">Phone: 7047352759</div>
          <div className="studentInfo">Age:</div>
          <div className="studentInfo">Gender: male</div>
          <div className="studentInfo">Birth Date: 03/11/2002</div>
          <div className="studentInfo">
            Address: 1600 Amphitheatre Parkway Mountain View, CA 94043
          </div>
        </div>
      </div>
    </div>
    // <h1>profile</h1>
  );
};
