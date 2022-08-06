import React from "react";
import ecommerceImg from "../images/ecommerce-site.png";
import netflixCloneImg from "../images/netflix.png";
import contactKeeperImg from "../images/contact-keeper.PNG";
import chatAppImg from "../images/socketio.png";
// import Project from "../Project/Project";
import blogImage from "../images/mastermyna.webp";
import CPMC from "../images/cpmc-website.PNG";
import "./index.css";

const Projects = () => {
  //List of projects
  const projects = [
    {
      title: "Master Myna",
      duration: "Aug 2020 - Dec 2020",
      companyName: "Proglint Software Solutions",
    },
    {
      title: "Mike Gulati",
      duration: "Aug 2020 - Dec 2020",
      companyName: "Proglint Software Solutions",
    },
    {
      title: "hCiketi",
      duration: "Apr 2021 - June 2022",
      companyName: "Telaverge communication Pvt Ltd",
    },
    {
      title: "Yuvipep",
      duration: "June 2022 -  till ",
      companyName: "Telaverge communication Pvt Ltd",
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <h1 className="work-heading">My Work</h1>
      <div id="work" className="projects-container" projects={projects}>
        {projects.map((project, index) => {
          let { duration, title } = project;
          return (
            <div>
              <div class="col-sm-8 col-lg-3">
                <div class="block block-rounded">
                  <div class="block-header block-header-default">
                    <h3 class="block-title">{title}</h3>
                    <div class="block-options">{duration}</div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
