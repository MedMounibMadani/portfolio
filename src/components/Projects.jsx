import { FaLaptopCode } from "react-icons/fa6";
import React from "react";
import Slider from "react-slick";
const projects = [
  {
    name: "SMA BTP",
    description: "Insurance platform for SMA BTP, A leading French insurance group specializing in construction and real estate, providing professional liability, property, and business insurance solutions for companies and individuals.",
    url: "https://www.smabtp.fr/sma/assurance/",
    image: "",
    technologies: ["Laravel", "Vue", "HTML5", "CSS3", "JavaScript", "Docker", "Mysql", "AWS"]
  },
  {
    name: "ISOGM",
    description: "A platform for ISOGM, A higher education institute offering state-recognized osteopathy programs, combining academic training with practical clinic experience for students.",
    url: "https://www.isogm.fr/",
    image: "",
    technologies: ["Laravel", "Vue", "Blade", "HTML5", "CSS3", "JavaScript", "Mysql", "Docker", "AWS" ]
  },
  {
    name: "IFJS",
    description: "A platform for IFJS, A professional training institute in wellness massage techniques, offering certified programs to develop skilled practitioners in various touch and massage methods.",
    url: "https://www.ifjs.fr/",
    image: "",
    technologies: ["Laravel", "Vue", "Blade", "HTML5", "CSS3", "JavaScript", "Mysql", "Docker", "AWS" ]
  },
  {
    name: "Axess Logistique",
    description: "Fast logistic web application for Axess Logistique, A logistics management platform designed to optimize deliveries, returns, and pickups, providing real-time tracking and multi-agency coordination.",
    url: "https://fast.axesslogistique.com/",
    image: "",
    technologies: ["React", "Node.js", "Symfony", "NestJs", "Docker", "Mysql", "AWS"]
  }
];

export default function Contact() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <ul style={{ margin: "0px" }}> {dots} </ul>
    ),
  };
    return (
      <section id="projects" className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-blue-500 to-purple-600 text-white  px-6 py-16">
        <FaLaptopCode size={40}/>
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <Slider {...settings} className="mt-20 min-h-[200px] w-full">
          {projects.map((project, index) => (
            <div key={index} className="min-h-[200px]">
              <div className="mx-2 md:w-1/2 md:mx-[25%] min-h-[200px] rounded-tr-3xl rounded-bl-3xl p-4 bg-white shadow-xl flex flex-col">
                <div className="p-8 rounded-lg flex items-center flex-col h-full">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-black">{project.name.toUpperCase()}</h3>
                  </div>
                  <p className="my-4 text-sm font-semibold text-black"> {project.description} </p>

                  {project.technologies.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-4 text-black">Technologies:</h4>
                      <div className="flex justify-center flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-sm bg-black px-3 py-1 cursor-pointer rounded-lg text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center text-center text-white font-bold text-xl mx-4 mt-8 w-1/4 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-6 hover:shadow-2xl"
                  >Visit</a>

                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    );
  }
  