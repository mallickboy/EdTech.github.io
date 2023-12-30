import React from "react";
const username = "sushanta";
const useremail = "susantadas@gmail.com";
const userage = "23";
import dp from "../assets/dp.jpeg";
export const Profile = (props) => {
  const { user_name, user_email, user_age, user_other_data } = props.userData;
  return (
    <div className="component" id="studentProfile">
      <div className="student">
        <div className="dp">
          <img src={dp} alt="dp" style={{ width: "9vw" }} />
        </div>
        <div className="infoContainer">
          <div className="infoContainer">
            <div className="name">{user_name}</div>
            <div className="studentInfo">Email: {user_email}</div>
            <div className="studentInfo">Age: {user_age}</div>
            <div className="studentInfo">
              Address: 1600 Amphitheatre Parkway Mountain View, CA 94043
            </div>
            {/* Add more fields as needed */}
          </div>
        </div>
      </div>
    </div>
    // <h1>profile</h1>
  );
};
