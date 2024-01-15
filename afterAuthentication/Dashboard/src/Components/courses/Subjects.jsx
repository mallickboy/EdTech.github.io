import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";
export const Subjects = () => {
  const { course } = useParams();
  const [subjects, setsubjects] = useState([]);
  const [insidecourse, setinsidecourse] = useState(false);

  const api = axios.create({
    baseURL: "http://localhost:8080", // Replace with your base URL
    // You can also add other configuration options here
  });
  useEffect(() => {
    api
      .get(`/overview/${course}`)
      .then((response) => {
        // Handle success
        console.log("Data:", response.data);
        setsubjects(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  }, []);
  // Fetch course details based on the id and render the detail view
  console.log("course" + course);
  return (
    <div>
      <h2>Course Detail View</h2>
      <p>Details for course with ID: {course}</p>
      <div className="component" id="courses">
        {subjects.map((subject) => (
          <Link
            key={subject}
            to={`/courses/${course}/${encodeURIComponent(subject)}`}
            className="courseCard"
          >
            <div className="course">
              <div className="title">{subject}</div>
              {/* <div className="desc">{course.description}</div> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
