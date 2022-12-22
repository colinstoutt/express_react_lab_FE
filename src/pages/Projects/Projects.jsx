import "./Projects.scss";
import React, { useState, useEffect } from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

export default function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "projects");
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    setProjects(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getProjectsData();
  });

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project, index) => (
      <div className="container">
        <div className="project" key={index}>
          <h1 className="project__title">{project.name}</h1>
          <a href={project.git}>
            <button className="project__link project__link-github">
              Github
            </button>
          </a>
          <a href={project.live}>
            <button className="project__link project__link-linked-in">
              Live site
            </button>
          </a>
          <p className="project__desc">{project.desc}</p>
        </div>

        <ImageSlider projectImgs={project.images} />
      </div>
    ));
  };

  return (
    <div className="projects">
      {projects ? loaded() : <h1 className="loading"></h1>}
    </div>
  );
}
