import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectDetails } from "../../Services/JSON/ProjectDetails/ProjectDetails";
import Banner from "./Banner";
import { projectCard } from "../../Services/JSON/Project/projectCard";
import ProjectDetailsSec from "./ProjectDetailsSec";
import ContactSec from "../Service/ContactSec";

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { slug } = useParams();

  const project = projectDetails.find((item) => item.slug === slug);
  const singleProject = projectCard.find((item) => item.slug === slug);

  return (
    <>
      <Banner singleProject={singleProject} />
      <ProjectDetailsSec project={project} />
      <ContactSec />
    </>
  );
};

export default ProjectDetails;
