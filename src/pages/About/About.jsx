import "./About.scss";
import { useState, useEffect } from "react";

export default function About(props) {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  // create function to make api call
  const getAboutData = async () => {
    // make api call and get response
    const response = await fetch(props.URL + "about");
    // turn response into javascript object
    const data = await response.json();
    // set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getAboutData();
  });

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div className="about">
      <h2 className="about__name">{about.name}</h2>
      <img className="about__img" src={about.headshot} alt="" />
      <p className="about__desc">{about.bio}</p>
      <a className="about__linked-in" href={about.linkedIn}>
        {about.linkedIn}
      </a>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1 className="loading"></h1>;
}
