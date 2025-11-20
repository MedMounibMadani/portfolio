import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-[80px] bg-gray-900 text-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4">
        <div className="text-xl font-bold cursor-pointer">MyPortfolio</div>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          <Link to="home" smooth={true} spy={true} duration={500} className="cursor-pointer text-xl px-4 py-2 hover:rounded-full hover:bg-white hover:text-black">Home</Link>
          <Link to="education" smooth={true} spy={true} duration={500} offset={-80} className="cursor-pointer text-xl px-4 py-2 hover:rounded-full hover:bg-white hover:text-black">Education</Link>
          <Link to="experiences" smooth={true} spy={true} duration={500} offset={-80} className="cursor-pointer text-xl px-4 py-2 hover:rounded-full hover:bg-white hover:text-black">Experiences</Link>
          <Link to="projects" smooth={true} spy={true} duration={500} offset={-80} className="cursor-pointer text-xl px-4 py-2 hover:rounded-full hover:bg-white hover:text-black">Projects</Link>
          <Link to="contact" smooth={true} spy={true} duration={500} offset={-80} className="cursor-pointer text-xl px-4 py-2 hover:rounded-full hover:bg-white hover:text-black">Contact</Link>
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
        <div className="md:hidden flex flex-col bg-gray-800 p-4 gap-4">
          <Link to="home" smooth={true} onClick={() => setIsOpen(false)} className="cursor-pointer text-xlp-2 hover:rounded-full hover:bg-white hover:text-black">Home</Link>
          <Link to="about" smooth={true} onClick={() => setIsOpen(false)} className="cursor-pointer text-xlp-2 hover:rounded-full hover:bg-white hover:text-black">About</Link>
          <Link to="projects" smooth={true} onClick={() => setIsOpen(false)} className="cursor-pointer text-xlp-2 hover:rounded-full hover:bg-white hover:text-black">Projects</Link>
          <Link to="contact" smooth={true} onClick={() => setIsOpen(false)} className="cursor-pointer text-xlp-2 hover:rounded-full hover:bg-white hover:text-black">Contact</Link>
        </div>
      )}
    </nav>
  );
}
