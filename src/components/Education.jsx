import { RiGraduationCapFill } from "react-icons/ri";


export default function Education() {
  const educationData = [
    {
      degree: "National Engineering Diploma",
      field: "Software Engineering",
      institution: "ESPRIT, Tunis",
      year: "2025", 
      file: "/portfolio/docs/ing.pdf"
    },
    {
      degree: "Bachelor’s Degree",
      field: "Computer Networks and Telecommunications",
      institution: "INSAT, Tunis",
      year: "2021",
      file: "/portfolio/docs/lic.pdf"
    },
    {
      degree: "Baccalaureate",
      field: "Secondary school",
      institution: "Graduated with Honors",
      year: "2014",
      file: "/portfolio/docs/bac.pdf"
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center justify-start bg-gray-100 text-gray-900 px-6 py-16"
    >
      <RiGraduationCapFill size={40} />
      <h2 className="text-4xl font-bold mb-12">Education</h2>
      <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mt-24">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="cursor-pointer p-1 rounded-tr-xl rounded-bl-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transform transition duration-300"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-center items-center">
              <h3 className="text-gray-900 text-xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-black/90 my-2">{edu.field}</p>
              <p className="text-black/3 mb-1">{edu.institution}</p>
              {edu.year && <p className="text-black-400 text-sm">{edu.year}</p>}
              <a
                href={edu.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-white font-bold text-xl px-4 py-2 mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg hover:shadow-2xl"
              >See diploma</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
