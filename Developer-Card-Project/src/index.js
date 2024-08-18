import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const cardData = {
  image: "phoenix.jpg",
  name: "S. M. Hasib",
  description:
    " Full_stack web developer and teacher at Udemny. WHen not coding  or preparing a course, I like to play board games, to cook ( and eat) , or to just enjoy the Portuguese sun at the beach.",
  skills: {
    skill: [
      " HTML + CSS",
      "javaScript",
      "Web Design",
      "Git and Github",
      "React",
      "Svelte",
    ],
    emoji: {
      like: "👍",
      strong: "💪",
      babyface: "👧",
    },
    backgroud: {
      blue: "blue",
      green: "green",
      yellow: "yellow",
      magenta: "magenta",
      tomato: "tomato",
    },
  },
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
      <SkillList />
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill
        skill={cardData.skills.skill[0]}
        emoji={cardData.skills.emoji.like}
        color={cardData.skills.backgroud.blue}
      />
      <Skill
        skill={cardData.skills.skill[1]}
        emoji={cardData.skills.emoji.like}
        color={cardData.skills.backgroud.green}
      />
      <Skill
        skill={cardData.skills.skill[2]}
        emoji={cardData.skills.emoji.like}
        color={cardData.skills.backgroud.yellow}
      />
      <Skill
        skill={cardData.skills.skill[3]}
        emoji={cardData.skills.emoji.like}
        color={cardData.skills.backgroud.magenta}
      />
      <Skill
        skill={cardData.skills.skill[4]}
        emoji={cardData.skills.emoji.like}
        color={cardData.skills.backgroud.blue}
      />
      <Skill
        skill={cardData.skills.skill[5]}
        emoji={cardData.skills.emoji.like}
        color={cardData.skills.backgroud.tomato}
      />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
