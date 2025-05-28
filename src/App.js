import React from "react";

// Google Fonts: Add this in your public/index.html <head> or load dynamically
// <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

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
  return (
    <nav className="fixed w-full bg-white shadow-md z-50 font-['Roboto']">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-[#3b3a30] cursor-default">
          Bhumi and Sons Pty Ltd
        </div>
        <div className="space-x-8 text-gray-700 font-medium">
          <a href="#home" className="hover:text-[#b88c4a] transition duration-300">
            Home
          </a>
          <a href="#about" className="hover:text-[#b88c4a] transition duration-300">
            About
          </a>
          <a href="#services" className="hover:text-[#b88c4a] transition duration-300">
            Services
          </a>
          <a href="#projects" className="hover:text-[#b88c4a] transition duration-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#b88c4a] transition duration-300">
            Contact
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
      <div className="bg-black bg-opacity-60 p-12 rounded-lg max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-6 text-white font-['Roboto'] drop-shadow-lg">
          Welcome to Bhumi and Sons Pty Ltd
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
      className="py-16 px-6 max-w-5xl mx-auto font-['Roboto'] text-gray-800"
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-[#3b3a30]">
        About Us
      </h2>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed">
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
      className="bg-[#f3f1e7] py-16 px-6 font-['Roboto'] text-gray-800"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-[#3b3a30]">
        Our Services
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map(({ icon, title, desc }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-6xl mb-4">{icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-[#b88c4a]">{title}</h3>
            <p className="text-gray-700">{desc}</p>
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
      className="py-16 px-6 max-w-6xl mx-auto font-['Roboto'] text-gray-800"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-[#3b3a30]">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {projects.map(({ title, img }, idx) => (
          <div
            key={idx}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={img}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-[#3b3a30]">{title}</h3>
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
      className="bg-[#f3f1e7] py-16 px-6 max-w-4xl mx-auto font-['Roboto'] text-gray-800 rounded-lg shadow-lg"
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-[#3b3a30]">
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
          className="w-full p-3 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#b88c4a]"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#b88c4a]"
          required
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#b88c4a]"
          required
        />
        <button
          type="submit"
          className="w-full bg-[#b88c4a] text-white py-3 font-semibold rounded hover:bg-[#997534] transition-colors duration-300"
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
      <main className="pt-20 scroll-smooth bg-white">
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
        <footer className="text-center py-8 text-gray-500 font-['Roboto']">
          © {new Date().getFullYear()} Bhumi and Sons Pty Ltd. All rights reserved.
        </footer>
      </main>
    </>
  );
}
