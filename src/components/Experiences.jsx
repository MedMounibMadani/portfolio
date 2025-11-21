import { MdWork } from "react-icons/md";
import React from "react";
import Slider from "react-slick";


const works = [
  {
    "role": "Engineer - Fullstack Developer",
    "company": "Axess Logistique",
    "location": "Tunis, TUNISIA",
    "period": "Since Oct 2025",
    "description": [
      "Participated in the design and development of a logistics management application used by multiple agencies and partners, handling several thousand daily transactions.",
      "Contributed to software architecture, backend performance optimization, and the reliability of communication between microservices.",
      "Collaborated with product, DevOps, and data teams to ensure system scalability, security, and high availability."
    ],
    "technologies": ["Php 7.4", "Symfony 5", "React v19", "MySQL", "Docker", "GitHub", "AWS"]
  },
  {
    "role": "Internship - Fullstack Developer",
    "company": "Intercomm",
    "location": "Le Mans, FRANCE",
    "period": "Mar to Sep 2024",
    "description": [
      "Designed and developed an innovative mobile application in the field of the Internet of Things (IoT).",
      "The app enables users to efficiently control and manage a variety of connected devices at home or in the office through an intuitive and user-friendly interface.",
      "Leveraging the eWeLink API, the application integrates advanced features to enhance the user experience and provide intelligent control over IoT devices."
    ],
    "technologies": ["React Native", "Node JS", "MongoDB", "Docker", "Git", "Sonarqube"]
  },
  {
    "role": "Fullstack Developer",
    "company": "Xenius Consulting",
    "location": "Tunis, TUNISIA",
    "period": "Mar 2023 to Mar 2024",
    "description": [
      "Implemented a cloud-based architecture on AWS to optimize infrastructure costs and improve application availability.",
      "Contributed to the migration of legacy systems to a microservices architecture.",
      "Collaborated closely with business teams to analyze requirements and deliver tailored technological solutions.",
      "Actively participated in technology watch and innovation initiatives, identifying new opportunities to enhance IT processes and system efficiency."
    ],
    "technologies": ["Laravel 9", "VueJs2", "NuxtJs", "AWS"]
  },
  {
    "role": "Fullstack Developer",
    "company": "TANITWEB",
    "location": "Tunis, TUNISIA",
    "period": "Nov 2022 to Mar 2023",
    "description": [
      "Optimized applications performance, reducing page load times by 30%.",
      "Implemented a MVC architecture to enhance code structure, maintainability, and scalability.",
      "Managed web projects from requirement analysis to technical specification drafting.",
      "Developed front-end and back-end features using a variety of technologies to meet functional needs.",
      "Collaborated with design teams to create a modern, intuitive, and user-friendly interface."
    ],
    "technologies": ["Php", "NodeJS", "MySQL", "HTML5", "CSS3", "Javascript", "Git"]
  },
  {
    "role": "Internship - AI / Machine Learning",
    "company": "Digika",
    "location": "Tunis, TUNISIA",
    "period": "Mar to Sep 2020",
    "description": [
      "Developed a machine learning model for automatic face detection in images.",
      "Trained the model on a dataset of 10,000 images, achieving 95% detection accuracy.",
      "Implemented an automatic person-counting algorithm for images.",
      "Collaborated with a team of developers to optimize application performance and reduce image processing time.",
      "Documented the entire development process and reported on model results and performance."
    ],
    "technologies": ["Tensorflow", "OpenCV", "Face recognition", "Raspberry Pi"]
  },
  {
    "role": "Internship - Fiber Optic",
    "company": "Tunsie Telecom",
    "location": "Tunis, TUNISIA",
    "period": "Jun to Aug 2018",
    "description": [
      "Supervised and maintained network operations to ensure maximum availability.",
      "Collaborated with service providers to resolve connectivity issues.",
      "Participated in network expansion projects to meet growing user demand.",
      "Worked closely with technical teams to troubleshoot and resolve connectivity problems."
    ],
    "technologies": []
  },
  {
    "role": "Internship - IoT",
    "company": "GetWireless",
    "location": "Tunis, TUNISIA",
    "period": "Mar to May 2017",
    "description": [
      "Designed and implemented a communication architecture between network devices and the supervision application (SNMP).",
      "Developed specific features for alert management and notifications.",
      "Conducted performance testing and optimization of the IoT supervision solution.",
      "Created automated fault detection features and generated incident reports.",
      "Collaborated with the development team to integrate new functionalities into the application."
    ],
    "technologies": []
  }
];


export default function Experiences() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  };
  
    return (
      <section id="experiences" className="min-h-screen flex flex-col items-center justify-start bg-gray-100 text-gray-900 px-6 py-4">
        <MdWork size={40} />
        <h2 className="text-4xl font-bold mb-12">Experiences</h2>
        <Slider {...settings} className="min-h-[400px] w-full">
          {works.map((work, index) => (
            <div key={index} className="min-h-[400px]">
              <div className="mx-2 md:w-1/2 md:mx-[25%] min-h-[400px] rounded-tr-3xl rounded-bl-3xl p-4 bg-gradient-to-r from-blue-700 to-purple-700 shadow-xl flex flex-col">
                <div className="p-8 rounded-lg flex flex-col h-full">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-white">{work.role.toUpperCase()}</h3>
                  </div>
                  <p className="text-white/70 mb-1 font-medium">{work.company} - {work.location}</p>
                  <p className="text-white/50 text-sm mb-4">{work.period}</p>

                  <ul className="list-none list-inside text-white/80 mb-4 space-y-1 flex-1">
                    {work.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  {work.technologies.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2 text-white">Technologies:</h4>
                      <div className="flex justify-center flex-wrap gap-2">
                        {work.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-sm bg-white px-3 py-1 cursor-pointer rounded-lg text-black"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    );
  }
  