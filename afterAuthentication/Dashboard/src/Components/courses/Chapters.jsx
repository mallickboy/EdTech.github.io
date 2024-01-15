import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export const Chapters = () => {
  const { course, subject } = useParams();
  const [chapters, setchapters] = useState([]);
  const [insidecourse, setinsidecourse] = useState(false);

  const api = axios.create({
    baseURL: "http://localhost:8080", // Replace with your base URL
    // You can also add other configuration options here
  });
  useEffect(() => {
    api
      .get(`/overview/${course}/${subject}`)
      .then((response) => {
        // Handle success
        console.log("Data:", response.data);
        setchapters(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  }, []);
  // Fetch course details based on the id and render the detail view
  console.log("subject id" + subject);
  return (
    <div>
      <h2>Course Detail View</h2>
      <p>Details for Subject with ID: {subject}</p>
      <div className="component" id="courses">
        {chapters.map((chapter) => (
          <Link
            key={chapter}
            to={`/courses/${course}/${subject}/${encodeURIComponent(chapter)}`}
            className="courseCard"
          >
            <div className="course">
              <div className="title">{chapter}</div>
              {/* <div className="desc">{course.description}</div> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
