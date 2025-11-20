import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-start bg-gray-900 text-white px-6 py-16"
    >
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

        {/* Contact Info */}
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex gap-6 mt-8">
            <a href="https://github.com/MedMounibMadani" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition text-2xl">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/mohamed-mounib-madani-0b26b911a/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition text-2xl">
              <FaLinkedin />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MdEmail className="w-6 h-6 text-blue-500" />
            <span>madani.mounib@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MdPhone className="w-6 h-6 text-green-500" />
            <span>+216 54 096 522</span>
          </div>
          <div className="flex items-center gap-3">
            <MdLocationOn className="w-6 h-6 text-red-500" />
            <span>Tunis, Tunisia</span>
          </div>
          <p className="text-white/70">
            Feel free to reach out for collaborations, freelance projects, or just to say hi!
          </p>
        
      </div>
    </section>
  );
}
