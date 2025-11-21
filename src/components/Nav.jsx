import { useState } from "react";
import { Link } from "react-scroll";
import { FaFilePdf } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-[80px] bg-gray-900 text-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4">
        <Link to="home" smooth={true} spy={true} duration={500} className="cursor-pointer text-xl font-bold">MyPortfolio</Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          <Link to="education" smooth={true} spy={true} duration={500} offset={-80} className="cursor-pointer text-xl px-4 py-2 hover:rounded-full hover:bg-white hover:text-black font-semibold">Education</Link>
          <Link to="experiences" smooth={true} spy={true} duration={500} offset={-80} className="cursor-pointer text-xl px-4 py-2 hover:rounded-full hover:bg-white hover:text-black font-semibold">Experiences</Link>
          <Link to="projects" smooth={true} spy={true} duration={500} offset={-80} className="cursor-pointer text-xl px-4 py-2 hover:rounded-full hover:bg-white hover:text-black font-semibold">Projects</Link>
          <Link to="contact" smooth={true} spy={true} duration={500} offset={-80} className="cursor-pointer text-xl px-4 py-2 hover:rounded-full hover:bg-white hover:text-black font-semibold">Contact</Link>
          <a
            href="/portfolio/docs/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center cursor-pointer text-xl px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-semibold"
          >
            <FaFilePdf size={20} className="mr-2" />
            Resume
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden min-h-screen flex flex-col bg-gray-800 p-4 gap-4">
          <Link to="education" smooth={true} onClick={() => setIsOpen(false)} className="cursor-pointer text-xlp-2 font-bold hover:rounded-full hover:bg-white hover:text-black">Education</Link>
          <Link to="experiences" smooth={true} onClick={() => setIsOpen(false)} className="cursor-pointer text-xlp-2 font-bold hover:rounded-full hover:bg-white hover:text-black">Experiences</Link>
          <Link to="projects" smooth={true} onClick={() => setIsOpen(false)} className="cursor-pointer text-xlp-2 font-bold hover:rounded-full hover:bg-white hover:text-black">Projects</Link>
          <Link to="contact" smooth={true} onClick={() => setIsOpen(false)} className="cursor-pointer text-xlp-2 font-bold hover:rounded-full hover:bg-white hover:text-black">Contact</Link>
          <a
            href="/portfolio/docs/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center cursor-pointer text-xl px-4 py-2 hover:rounded-full hover:bg-white hover:text-black font-semibold bg-gradient-to-r from-blue-500 to-purple-600 "
          >
            <FaFilePdf size={20} className="mr-2" />
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
