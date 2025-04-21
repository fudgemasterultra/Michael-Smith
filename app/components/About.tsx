const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Hey, I'm Michael Smith — a full stack developer who thrives on
              building clean, efficient, and user-focused digital experiences.
              Whether it's streamlining performance, optimizing for SEO, or
              creating custom apps, I bring a practical and thoughtful approach
              to every project.
            </p>
            <p className="text-lg text-gray-600">
              Over the past few years, I’ve worked on everything from small
              business websites to full-scale applications and kiosk systems.
              I'm always learning, improving, and aiming to deliver reliable
              solutions that make a real impact.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">Frontend</h3>
                <p className="text-gray-600">React, Flutter, Jquery</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900">Backend</h3>
                <p className="text-gray-600">Node.js, Python, PHP</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/Michael-Smith-Web-Designer.jpg"
              alt="Michael Smith - Web Designer"
              className="h-64 w-64 rounded-full mx-auto object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-sm text-gray-600">
                Always learning and growing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
