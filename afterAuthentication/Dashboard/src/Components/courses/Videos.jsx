import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export const Videos = () => {
  const { course, subject, chapter } = useParams();
  const [videos, setvideos] = useState([]);
  const [insidecourse, setinsidecourse] = useState(false);

  const api = axios.create({
    baseURL: "http://localhost:8080", // Replace with your base URL
    // You can also add other configuration options here
  });
  useEffect(() => {
    api
      .get(`/overview/${course}/${subject}/${chapter}`)
      .then((response) => {
        // Handle success
        console.log("Data:", response.data);
        setvideos(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  }, []);
  // Fetch course details based on the id and render the detail view
  console.log("chapter id" + chapter);
  return (
    <div>
      <h2>Course Detail View</h2>
      <p>Details for chapter with ID: {chapter}</p>
      <div className="component" id="courses">
        {videos.map((video) => (
          <div className="course" key={video}>
            <div className="title">{video.video_title}</div>
            {/* <div className="desc">{course.description}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};
