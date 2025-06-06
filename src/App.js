import React, { useEffect, useState } from "react";
import { FaHome, FaInfoCircle, FaCogs, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const services = [
  {
    icon: "🏠",
    title: "Residential Construction",
    desc: "Building your dream home with quality craftsmanship.",
  },
  {
    icon: "🏢",
    title: "Commercial Building",
    desc: "Durable and efficient buildings for your business needs.",
  },
  {
    icon: "🔧",
    title: "Renovations & Remodeling",
    desc: "Transform your space with our expert renovations.",
  },
  {
    icon: "📋",
    title: "Project Management",
    desc: "Reliable management to deliver on time and budget.",
  },
  {
    icon: "💡",
    title: "Consultation & Planning",
    desc: "Professional advice to bring your vision to reality.",
  },
];

const projects = [
  { title: "Modern House", img: "https://source.unsplash.com/400x300/?house" },
  { title: "Office Complex", img: "https://source.unsplash.com/400x300/?office-building" },
  { title: "Renovated Kitchen", img: "https://source.unsplash.com/400x300/?kitchen" },
  { title: "Luxury Villa", img: "https://source.unsplash.com/400x300/?villa" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 backdrop-blur-md ${
        scrolled ? "bg-white/70 shadow-lg" : "bg-transparent"
      } font-['Roboto']`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-[#3b3a30] cursor-default drop-shadow-sm">
          Bhumi & Sons Pty Ltd
        </div>
        <div className="space-x-8 text-gray-700 font-semibold flex items-center">
          <a href="#home" className="hover:text-[#b88c4a] transition duration-300 flex items-center gap-1">
            <FaHome /> Home
          </a>
          <a href="#about" className="hover:text-[#b88c4a] transition duration-300 flex items-center gap-1">
            <FaInfoCircle /> About
          </a>
          <a href="#services" className="hover:text-[#b88c4a] transition duration-300 flex items-center gap-1">
            <FaCogs /> Services
          </a>
          <a href="#projects" className="hover:text-[#b88c4a] transition duration-300 flex items-center gap-1">
            <FaProjectDiagram /> Projects
          </a>
          <a href="#contact" className="hover:text-[#b88c4a] transition duration-300 flex items-center gap-1">
            <FaEnvelope /> Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-60 p-12 rounded-lg max-w-3xl animate-fadeIn">
        <h1 className="text-5xl font-extrabold mb-6 text-white font-['Roboto'] drop-shadow-lg tracking-wide">
          Welcome to Bhumi & Sons Pty Ltd
        </h1>
        <p className="text-xl text-gray-200 max-w-xl mx-auto leading-relaxed drop-shadow-md">
          Your trusted partner in construction and building solutions. Quality
          and reliability you can build on.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="py-16 px-6 max-w-5xl mx-auto font-['Roboto'] text-gray-800 animate-fadeIn"
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-[#3b3a30] tracking-wide">
        About Us
      </h2>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed tracking-wide">
        Bhumi and Sons Pty Ltd is a family-owned construction company committed
        to delivering top-quality building projects with professionalism and
        care. With years of experience, we bring your vision to life with
        integrity, craftsmanship, and a passion for excellence.
      </p>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="bg-[#f3f1e7] py-16 px-6 font-['Roboto'] text-gray-800 animate-fadeIn"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-[#3b3a30] tracking-wide">
        Our Services
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map(({ icon, title, desc }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <div className="text-7xl mb-6">{icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-[#b88c4a] tracking-wide">{title}</h3>
            <p className="text-gray-700 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="py-16 px-6 max-w-6xl mx-auto font-['Roboto'] text-gray-800 animate-fadeIn"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-[#3b3a30] tracking-wide">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {projects.map(({ title, img }, idx) => (
          <div
            key={idx}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:scale-[1.03]"
          >
            <img
              src={img}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-[#3b3a30] tracking-wide">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f3f1e7] py-16 px-6 max-w-4xl mx-auto font-['Roboto'] text-gray-800 rounded-lg shadow-lg animate-fadeIn"
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-[#3b3a30] tracking-wide">
        Contact Us
      </h2>
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent (frontend only). Thank you!");
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#b88c4a] text-lg"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#b88c4a] text-lg"
          required
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-4 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#b88c4a] text-lg resize-none"
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#b88c4a] to-[#997534] text-white py-4 font-semibold rounded shadow-lg hover:from-[#997534] hover:to-[#b88c4a] transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20 scroll-smooth bg-white selection:bg-[#b88c4a] selection:text-white">
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
        <footer className="text-center py-8 text-gray-500 font-['Roboto'] tracking-wide select-none">
          © {new Date().getFullYear()} Bhumi & Sons Pty Ltd. All rights reserved.
        </footer>
      </main>
    </>
  );
}
