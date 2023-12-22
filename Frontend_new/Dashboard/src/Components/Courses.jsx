import React from "react";

export const Courses = () => {
  return (
    <>
      {" "}
      <div class="component" id="courses">
        <div class="courseCard">
          <div class="course">
            <div class="title">IITJEE</div>
            <div class="desc">
              Crack IITJEE In One Year Course.
              <br />
              This is all you need to get seat in Top IITs
            </div>
          </div>
          <div class="course">
            <div class="title">JEE Main</div>
            <div class="desc">
              Crack JEE Main In One Year Course.
              <br />
              This is all you need to get seat in Top NITs
            </div>
          </div>
          <div class="course">
            <div class="title">NEET</div>
            <div class="desc">
              Crack NEET In One Year Course.
              <br />
              This is all you need to get seat in Top Medical Institutes
            </div>
          </div>
          <div class="course">
            <div class="title">GATE</div>
            <div class="desc">
              Crack GATE In One Year Course.
              <br />
              This is all you need to get seat in Top IITs
            </div>
          </div>
          <div class="videoFrame">
            <h2>Video</h2>{" "}
            <video id="videoPlayer" controls>
              <source src="/video" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};
