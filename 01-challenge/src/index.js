import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const properties = [
  {
    skill: "Love",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "Yamuna",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Architecture",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Marble",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "Agra",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Ivory-white",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <PropertyList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="Taj-1.jpg" alt="Taj Mahal" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Taj Mahal</h1>
      <p>
        The Taj Mahal is an iconic ivory-white marble mausoleum in Agra, India,
        built by Mughal Emperor Shah Jahan for his beloved wife, Mumtaz Mahal,
        symbolizing eternal love and considered a masterpiece of Mughal
        architecture, featuring intricate inlay work and symmetrical gardens,
        designated a UNESCO World Heritage site, and attracting millions as a
        global symbol of India's rich history and art.
      </p>
    </div>
  );
}

function PropertyList() {
  return (
    <div className="skill-list">
      {properties.map((property) => (
        <Property propertyObj={property} key={property.skill} />
      ))}
    </div>
  );
}

function Property({ propertyObj }) {
  console.log("Property " + propertyObj.level);
  const style = { backgroundColor: propertyObj.color };
  return (
    <span className="skill" style={style}>
      {propertyObj.skill}
      {propertyObj.level === "beginner" && "👶"}
      {propertyObj.level === "intermediate" && "👍"}
      {propertyObj.level === "advanced" && "💪"}
    </span>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
