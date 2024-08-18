import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const cardData = {
  image: "phoenix.jpg",
  name: "S. M. Hasib",
  description:
    " Full_stack web developer and teacher at Udemny. WHen not coding  or preparing a course, I like to play board games, to cook ( and eat) , or to just enjoy the Portuguese sun at the beach.",
  skills: [
    " HTML + CSS 💪",
    "javaScript 💪",
    "Web Design 💪",
    "Git and Github 👍",
    "React 💪",
    "Svelte 👧",
  ],
};

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <Avatar />
      <Data />
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src={cardData.image} alt={cardData.name} />;
}
function Data() {
  return (
    <div className="data">
      <h1>{cardData.name}</h1>
      <p>{cardData.description}</p>
      <Skill />
    </div>
  );
}
function Skill() {
  return (
    <div className="skill-list">
      <div style={{ backgroundColor: "red" }} className="skill">
        {cardData.skills[0]}
      </div>
      <div style={{ backgroundColor: "yellow" }} className="skill">
        {cardData.skills[1]}
      </div>
      <div style={{ backgroundColor: "green" }} className="skill">
        {cardData.skills[2]}
      </div>
      <div style={{ backgroundColor: "magenta" }} className="skill">
        {cardData.skills[3]}
      </div>
      <div style={{ backgroundColor: "lightblue" }} className="skill">
        {cardData.skills[4]}
      </div>
      <div style={{ backgroundColor: "red" }} className="skill">
        {cardData.skills[4]}
      </div>
      <div style={{ backgroundColor: "tomato" }} className="skill">
        {cardData.skills[5]}
      </div>
    </div>
  );
}
// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
