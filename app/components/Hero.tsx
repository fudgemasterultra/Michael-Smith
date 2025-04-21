const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Code. Create. Iterate. Ship.
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto">
          I'm Michael Smith, building fast, functional websites and apps with a
          focus on performance, adaptability, and real-world impact.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#work"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
