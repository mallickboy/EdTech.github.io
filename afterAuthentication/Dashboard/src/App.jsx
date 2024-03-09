import { Profiler, useState, useEffect } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
// import "./style.css";
import "./styleDashboard.css";
import dp from "./assets/dp.jpeg";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  NavLink,
  useLocation,
} from "react-router-dom";
import { Profile } from "./Components/Profile";
import { OnlineTest } from "./Components/OnlineTest";
import { Quiz } from "./Components/Quiz";
import { Performance } from "./Components/Performance";
import { CoursesComponent } from "./Components/courses/Courses";
import { Chapters } from "./Components/courses/Chapters";
import { Subjects } from "./Components/courses/Subjects";
import { Videos } from "./Components/courses/Videos";
import {Upload} from "./Components/Upload"
function App() {
  const [count, setCount] = useState(0);
  const [userData, setuserData] = useState(null);
  const api = axios.create({
    baseURL: "http://localhost:8080", // Replace with your base URL
    // You can also add other configuration options here
  });

  // useEffect(() => {
  //   // Get data from local storage
  //   const userDataString = localStorage.getItem("userData");

  //   if (userDataString) {
  //     // Parse the JSON data
  //     const userData = JSON.parse(userDataString);

  //     // Now you can use the userData in your component
  //     console.log("User Data:", userData);

  //     // Perform any additional actions with userData
  //   }
  // }, []);
  useEffect(() => {
    api
      .get("/profile")
      .then((response) => {
        // Handle success
        console.log("Data:", response.data);
        setuserData(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  }, []);
  return (
    <>
      <BrowserRouter
      // basename={import.meta.env.DEV ? "/" : "/"}
      >
        <Routes>
          <Route path="/" element={<Root />}>
            {/* <Route index element={<Profile />} /> */}
            <Route path="/profile" element={<Profile userData={userData} />} />

            <Route path="/courses" element={<CoursesComponent />} />
            <Route path="/courses/:course" element={<Subjects />} />
            <Route path="/courses/:course/:subject" element={<Chapters />} />
            <Route
              path="/courses/:course/:subject/:chapter"
              element={<Videos />}
            />
            <Route path="/onlineTest" element={<OnlineTest />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/upload" element={<Upload />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
const Root = () => {
  const location = useLocation();
  return (
    <>
      <div class="container">
        <aside>
          <div className="top">
            <div className="icon">
              <span className="material-symbols-rounded">school</span>
            </div>
            <div className="company">
              <span id="Re">Re</span>learn
            </div>
          </div>
          <NavLink to="/profile" id="profile" className="menu-item">
            {/* <div id="profile" className="" data-opt="studentProfile"> */}
            <div className="profileIcon">
              <img src={dp} alt="dp" />
            </div>

            <div className="profileName">Sushanta Das</div>
            {/* </div> */}
          </NavLink>
          <div className="sidebar">
            <NavLink to="/courses" className="menu menu-item">
              <div className="icon">
                <span
                  className={`material-symbols-rounded ${
                    location.pathname === "/courses" ? "active" : ""
                  }`}
                >
                  menu_book
                </span>
              </div>
              <div className="menutext" data-opt="courses">
                Courses
              </div>
            </NavLink>
            <NavLink to="/onlineTest" className="menu menu-item">
              <div className="icon">
                <span
                  className={`material-symbols-rounded ${
                    location.pathname === "/onlineTest" ? "active" : ""
                  }`}
                >
                  history_edu
                </span>
              </div>
              <div className="menutext" data-opt="tests">
                Online Test
              </div>
            </NavLink>
            <NavLink to="/performance" className="menu menu-item">
              <div className="icon">
                <span
                  className={`material-symbols-rounded ${
                    location.pathname === "/performance" ? "active" : ""
                  }`}
                >
                  monitoring
                </span>
              </div>
              <div className="menutext" data-opt="performances">
                Performance
              </div>
            </NavLink>
            <NavLink to="/quiz" className="menu menu-item">
              <div className="icon">
                <span
                  className={`material-symbols-rounded ${
                    location.pathname === "/quiz" ? "active" : ""
                  }`}
                >
                  quiz
                </span>
              </div>
              <div className="menutext" data-opt="quizes">
                Quiz
              </div>
            </NavLink>
            <NavLink to="/upload" className="menu menu-item">
              <div className="icon">
                <span
                  className={`material-symbols-rounded ${
                    location.pathname === "/upload" ? "active" : ""
                  }`}
                >
                  upload
                </span>
              </div>
              <div className="menutext" data-opt="uploads">
                Upload
              </div>
            </NavLink>
            <div className="menu menu-item logout" data-opt="Logout">
              <div className="icon">
                <span className="material-symbols-rounded">logout</span>
              </div>
              <div className="menutext" data-opt="Logout">
                Log Out
              </div>
            </div>
          </div>
        </aside>

        <section id="RightSection">
          <Outlet />
        </section>
      </div>{" "}
    </>
  );
};
export default App;
