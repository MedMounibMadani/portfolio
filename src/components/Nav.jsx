import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FaFilePdf } from "react-icons/fa6";
import gsap from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef(null);
  const desktopLinksRef = useRef([]);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    gsap.from(desktopLinksRef.current, {
      opacity: 0,
      y: -10,
      stagger: 0.1,
      delay: 0.4,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.4, ease: "power3.out" }
      );

      gsap.from(
        mobileMenuRef.current.children,
        {
          opacity: 0,
          x: 20,
          stagger: 0.1,
          delay: 0.2,
          duration: 0.3,
          ease: "power2.out",
        }
      );
    }
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full h-[80px] bg-gray-900 text-white shadow z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4">
        <Link
          to="home"
          smooth
          duration={500}
          className="cursor-pointer text-xl font-bold"
        >
          MyPortfolio
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          {["education", "experiences", "projects", "contact"].map(
            (item, i) => (
              <Link
                key={item}
                ref={(el) => (desktopLinksRef.current[i] = el)}
                to={item}
                smooth
                offset={-80}
                duration={500}
                className="cursor-pointer text-xl px-4 py-2 hover:rounded-full hover:bg-white hover:text-black font-semibold"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            )
          )}

          <a
            ref={(el) =>
              (desktopLinksRef.current[desktopLinksRef.current.length] = el)
            }
            href="/portfolio/docs/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-semibold"
          >
            <FaFilePdf size={20} className="mr-2" />
            Resume
          </a>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed top-[80px] right-0 w-full min-h-screen bg-gray-800 p-6 flex flex-col gap-6"
        >
          {["education", "experiences", "projects", "contact"].map((item) => (
            <Link
              key={item}
              to={item}
              smooth
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}

          <a
            href="/portfolio/docs/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-xl px-4 py-2 rounded-full font-semibold bg-gradient-to-r from-blue-500 to-purple-600"
          >
            <FaFilePdf size={20} className="mr-2" />
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
