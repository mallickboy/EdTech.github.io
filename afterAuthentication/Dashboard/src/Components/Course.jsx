import React from "react";
import { useParams } from "react-router-dom";

export const CourseDetailComponent = () => {
  const { id } = useParams();

  // Fetch course details based on the id and render the detail view
  console.log("id" + id);
  return (
    <div>
      <h2>Course Detail View</h2>
      <p>Details for course with ID: {id}</p>
    </div>
  );
};
