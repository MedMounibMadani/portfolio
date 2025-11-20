import TechStack from "./TechStack";
import {Link} from 'react-scroll';
export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-64"
    >
    
        <div className="w-1/2 mt-10 md:mt-0  flex justify-center">
         <img
            src="/portfolio/images/mounib.png"
            alt="Profile"
            className="
              bg-gray-900
                w-40 h-40 md:w-80 md:h-80 
                object-cover 
                shadow-2xl 
                scale-90
                rounded-3xl
                transition-transform duration-300 
                hover:scale-105 hover:shadow-3xl
            "
        />
      </div>
      <div className="w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold">Hi, I’m Mounib</h1>
        <p className="text-lg md:text-xl text-white/90">
            I’m a <span className="font-bold">Full Stack Software Engineer</span> creating seamless and performant software solutions.
        </p>
        <TechStack />
        <div className="flex justify-center mt-8">
          <Link  to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer bg-gray-900 text-white font-semibold mt-4 px-6 py-3 rounded-lg hover:bg-white/90 hover:text-black transition">Contact Me</Link>
        </div>
      </div>

    </section>
  );
}
