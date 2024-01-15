import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
export const CoursesComponent = () => {
  const api = axios.create({
    baseURL: "http://localhost:8080", // Replace with your base URL
    // You can also add other configuration options here
  });
  const [courses, setcourses] = useState([]);
  const [insidecourse, setinsidecourse] = useState(false);
  useEffect(() => {
    api
      .get("/overview")
      .then((response) => {
        // Handle success
        console.log("Data:", response.data);
        setcourses(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  }, []);
  return (
    <>
      {" "}
      {!insidecourse && (
        <div className="component" id="courses">
          {courses.map((course) => (
            <Link key={course} to={`/courses/${encodeURIComponent(course)}`} className="courseCard">
              <div className="course">
                <div className="title">{course}</div>
                {/* <div className="desc">{course.description}</div> */}
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
