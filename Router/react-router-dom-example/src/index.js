import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes, Link, useParams, useLocation } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

const data = {
  cml: {
    name: "이창민",
    description: "리액트 초보",
  },
};

function Profile() {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
}

function About() {
  const location = useLocation();

  return (
    <div>
      <h1>소개</h1>
      <p>About Component</p>
      <p>쿼리스트링: {location.search}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>React Router Dom example</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route path="/topics" element={<Topics></Topics>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="profiles/:username" element={<Profile></Profile>}></Route>
      </Routes>
      <p>
        <Link to="/profiles/cml">이창민 프로필</Link>
      </p>
      <p>
        <Link to="/profiles/ccc">없는 프로필</Link>
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
