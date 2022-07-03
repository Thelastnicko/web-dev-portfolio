import React from "react";
import "./Work.scss";

import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Work = () => {
  const soloProjects = [
    {
      id: 1,
      title: "SaveMySeat",
      img: IMG1,
      link: "https://melodic-boba-111583.netlify.app/",
      github: "https://github.com/Thelastnicko/save-my-seat",
    },
    {
      id: 2,
      title: "SaveMySeat",
      img: IMG1,
      link: "https://melodic-boba-111583.netlify.app/",
      github: "https://github.com/Thelastnicko/save-my-seat",
    },
    {
      id: 3,
      title: "SaveMySeat",
      img: IMG1,
      link: "https://melodic-boba-111583.netlify.app/",
      github: "https://github.com/Thelastnicko/save-my-seat",
    },
    {
      id: 4,
      title: "SaveMySeat",
      img: IMG1,
      link: "https://melodic-boba-111583.netlify.app/",
      github: "https://github.com/Thelastnicko/save-my-seat",
    },
    {
      id: 5,
      title: "SaveMySeat",
      img: IMG1,
      link: "https://melodic-boba-111583.netlify.app/",
      github: "https://github.com/Thelastnicko/save-my-seat",
    },
    {
      id: 6,
      title: "SaveMySeat",
      img: IMG1,
      link: "https://melodic-boba-111583.netlify.app/",
      github: "https://github.com/Thelastnicko/save-my-seat",
    },
    // {
    //   id: 2,
    //   title: "FakeStore",
    //   img: IMG4,
    //   link: "https://angry-yalow-17c6ab.netlify.app/",
    //   github: "https://github.com/Meri-MG/metrics-webapp---react",
    // },
    // {
    //   id: 3,
    //   title: "To-Do-App",
    //   img: IMG2,
    //   link: "https://meri-mg.github.io/To-Do-List/dist/",
    //   github: "https://github.com/Meri-MG/To-Do-List",
    // },
    // {
    //   id: 4,
    //   title: "Shelter",
    //   img: IMG3,
    //   link: "https://meri-mg.github.io/shelter/pages/main/index.html",
    //   github: "https://github.com/Meri-MG/shelter",
    // },
    // {
    //   id: 5,
    //   title: "World News",
    //   img: IMG5,
    //   link: "https://meri-mg.github.io/Unilab-world-news/",
    //   github: "https://github.com/Meri-MG/Unilab-world-news",
    // },
    // {
    //   id: 6,
    //   title: "Math Resource",
    //   img: IMG6,
    //   link: "https://lukinoo.github.io/math-resource/",
    //   github: "https://github.com/lukinoo/math-resource",
    // },
  ];
  return (
    <section id="work">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <h3>{pro.title}</h3>
            <div className="portfolio__item-cta">
              <a href={pro.github} className="btn">
                GitHub
              </a>
              <a href={pro.link} className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;
