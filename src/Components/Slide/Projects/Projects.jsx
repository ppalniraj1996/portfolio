import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import { MainHeadingWrapper } from "../../Elements/Elements";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

const useStyles = makeStyles((theme) => ({
  root: {
    overflowY: "scroll",
    padding: "100px 0 ",
  },
}));

const BridgeTwo = styled.div`
  padding-top: 150px;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};

  /* min-height: 400px; */
  z-index: 99;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  > div:nth-child(2) {
    padding: 50px 0;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    grid-row-gap: 20px;
    width: 90%;
    margin: 30px auto;
    align-items: center;
    justify-content: space-evenly;
    background-size: cover;
    background-position: center;
  }
`;

let projectArray = [
  {
    img: "https://miro.medium.com/max/875/0*o5D12rCG-3FdcrPN.png",
    title: "Overstock",
    description: "E-Commerce shop",
    techStack: ["HTML", "CSS", "JavaScript"],
    repoLink: "https://github.com/ppalniraj1996/Overstock",
    demoLink: "https://overstock001.netlify.app/",
    type: "A collaborative project built by a team of 5 under 6 days during Masai Hackathon 2022.",
    blogLink: "#",
    features: [
      "Signup and Login.",
      "A user can add a product to cart or to wishlist.",
      "A user can order by filling in the required details",
      " payment page checkout page",
    ],
  },
  {
    img: "https://miro.medium.com/max/875/0*hlWU_BmPHj45qxIo.png",
    title: "Pluralsight",
    description:
      "Pluralsight, Inc. is an American privately held online education company.",
    techStack: ["HTML", "CSS", "JavaScript"],
    repoLink: "https://github.com/khageswar9/Clone-Of-Plurals.com",
    demoLink:
      "https://plurlsightclone.netlify.app/src/frontend/homepage/index.html",
    type: "A collaborative project built by a team of 5 under 6 days during Masai Hackathon 2022.",
    blogLink: "#",
    features: [
      "Register Page and Login.",
      "A user can choose a course based on the requirement and price.",
      "A user can take the free trial of the courses",
      " payment page checkout page",
    ],
  },
  {
    img: "https://miro.medium.com/max/1400/0*Oqe1lAdbTiGLnWJR.jpeg",
    title: "Bewakoof ",
    description: "E-Commerce shop",

    techStack: ["HTML", "CSS", "JavaScript"],
    repoLink: "https://github.com/ppalniraj1996/Bewakoof-Project",
    demoLink: "https://bewakoof0025.netlify.app/",
    type: "Solo project",
    blogLink:
      "https://medium.com/@ppalniraj1996/cloning-bewakoof-the-first-of-the-many-projects-a2ffa918d745",
    features: [
      "Signup and Login.",
      "A user can add a product to cart or to wishlist.",
      "A user can order by filling in the required details",
      " payment page checkout page",
    ],
  },

  {
    img: "https://miro.medium.com/max/1400/0*RWJOyySK9O6U0liM.png",
    title: "kimaya",
    description:
      "Online Ordering Fresh Fruits",
    techStack: ["HTML", "CSS", "JavaScript","React"],
    repoLink: "https://github.com/ppalniraj1996/Kimaye",
    demoLink: "https://kimaye007.netlify.app/",
    type: "Group project",
    blogLink: "#",
    features: [
      " Sign in /Signup authentication page",
      "Products Page",
      "Login/Signup",
      "Product Details ",
      "Payment Features",
    ],
  },
];

function Projects() {
  const [panel, setPanel] = React.useState(false);
  let [currentProject, setCurrentProject] = React.useState({});
  const classes = useStyles();
  return (
    <div id="projects">
      <BridgeTwo backgroundImg={currentProject.img}>
        <MainHeadingWrapper>
          <h1>Projects</h1>
          <div></div>
        </MainHeadingWrapper>
        <div>
          {projectArray?.map((project) => (
            <ProjectCard
              key={project.title}
              setCurrentProject={setCurrentProject}
              setPanel={setPanel}
              {...project}
            ></ProjectCard>
          ))}
        </div>
        <Modal
          className={classes.root}
          open={panel}
          onClose={() => setPanel(false)}
        >
          <ProjectDetail
            {...currentProject}
            setPanel={setPanel}
          ></ProjectDetail>
        </Modal>
      </BridgeTwo>
    </div>
  );
}

export default Projects;
